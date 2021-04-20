import 'dart:convert';

import 'package:app/utils/utils.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:http/http.dart' as http;

class Section1Provider with ChangeNotifier {
  static Future<void> submitHandler(GlobalKey<FormBuilderState> formkey) async {
    final bool isFormValid = formkey.currentState!.validate();

    if (isFormValid) {
      formkey.currentState!.save();

      /// [ This is done because formkey.currentState!.value is a unmodifiable map ]
      final section1FormValues = {...formkey.currentState!.value};

      Map<String, Map<String, dynamic>> historyOfPresentingIllness = {
        'historyOfPresentingIllness': {},
      };

      Utility.historyOfPatientIllness.forEach((element) {
        historyOfPresentingIllness['historyOfPresentingIllness']![element] = section1FormValues[element];
        section1FormValues.remove(element);
      });

      section1FormValues['historyOfpresentingIllness'] = {
        ...historyOfPresentingIllness['historyOfPresentingIllness']!,
      };

      // Change age to Number
      section1FormValues.update('age', (value) => int.parse(value));

      (section1FormValues['historyOfpresentingIllness'] as Map<String, dynamic>)
          .update('backgroundPain', (value) => value.toInt());
      (section1FormValues['historyOfpresentingIllness'] as Map<String, dynamic>)
          .update('intensity', (value) => value.toInt());

      final response = await http.post(
        Uri.parse('http://localhost:3000/api/create/section1/607ea1cde8d0b162349299ce'),
        headers: Utility.headerValue,
        body: json.encode(section1FormValues),
      );
      print(response.body);
    }
  }
}

// 607e8857e8d0b17d449299ca - sample docID.
// 607ea1cde8d0b162349299ce - sample pID.
