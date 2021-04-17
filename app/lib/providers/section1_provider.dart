import 'package:app/utils/utils.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

class Section1Provider with ChangeNotifier {
  static Future<void> submitHandler(GlobalKey<FormBuilderState> formkey) async {
    final bool isFormValid = formkey.currentState!.validate();

    if (isFormValid) {
      formkey.currentState!.save();

      final formValues = {...formkey.currentState!.value};

      Map<String, Map<String, dynamic>> historyOfPresentingIllness = {
        'historyOfPresentingIllness': {},
      };

      Utility.historyOfPatientIllness.forEach((element) {
        historyOfPresentingIllness['historyOfPresentingIllness']![element] = formValues[element];
        formValues.remove(element);
      });

      formValues['historyOfpresentingIllness'] = {
        ...historyOfPresentingIllness['historyOfPresentingIllness']!,
      };

      print(formValues);

      /// [ Post method is yet left ]
    }
  }
}
