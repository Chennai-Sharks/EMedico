import 'dart:convert';

import 'package:app/providers/util_provider.dart';
import 'package:app/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:http/http.dart' as http;
import 'package:velocity_x/velocity_x.dart' show VxToast;

class Section1Provider with ChangeNotifier {
  static Future<void> submitHandlerSection1({
    required GlobalKey<FormBuilderState> formkey,
    required BuildContext context,
  }) async {
    final bool isFormValid = formkey.currentState!.validate();

    if (isFormValid) {
      final docId = await UtilityProvider.getDocId();
      if (docId == null)
        return;
      else {
        formkey.currentState!.save();
        Map<String, Map<String, dynamic>> historyOfPresentingIllness = {
          'historyOfPresentingIllness': {},
        };

        /// [ This is done because formkey.currentState!.value is an unmodifiable map ]
        final section1FormValues = {...formkey.currentState!.value};

        // This done beacause historyOfPre... is saved as seperate values in the form
        // instead of a map. So I am making it as a map.
        Utility.historyOfPatientIllness.forEach((element) {
          historyOfPresentingIllness['historyOfPresentingIllness']![element] = section1FormValues[element];
          section1FormValues.remove(element);
        });

        section1FormValues['historyOfpresentingIllness'] = {
          ...historyOfPresentingIllness['historyOfPresentingIllness']!,
        };

        // Change age to Number
        section1FormValues.update('age', (value) => int.parse(value));

        // This will get the mongo Id of the patient when submitted to addPatinet/docId
        final Map<String, String> addNewPatient = {
          'name': section1FormValues['name'],
          'dpid': section1FormValues['dpid'], // this is the id given by doctor to a patient
        };
        // Removed dpid coz its not need in the post request for submission of the form.
        section1FormValues.remove('dpid');

        // this is to get the mongo id of the patient under a doctor
        final newPatient = await http.post(
          Uri.parse('http://localhost:3000/api/create/addPatient/${docId}'),
          headers: Utility.headerValue,
          body: json.encode(addNewPatient),
        );
        print(newPatient.body);

        final newPatientDetails = json.decode(newPatient.body) as Map<String, dynamic>;

        // _id is mongoId
        await UtilityProvider.setCurrentPatientId(pId: newPatientDetails['_id']);

        section1FormValues.addAll({
          'mongoid': newPatientDetails['_id'],
        });

        final response = await http.post(
          Uri.parse('http://localhost:3000/api/create/section1/${newPatientDetails['_id']}'),
          headers: Utility.headerValue,
          body: json.encode(section1FormValues),
        );
        print(response.body);
        VxToast.show(context, msg: 'Done.');
      }
    } else {
      VxToast.show(context, msg: 'Some Fields are having error. Scroll Up and see.');
    }
  }
}

// 607e8857e8d0b17d449299ca - sample docID.
// 607ea1cde8d0b162349299ce - sample pID.
// sample url = http://localhost:3000/api/create/section1/607ea1cde8d0b162349299ce
