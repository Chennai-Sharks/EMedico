import 'package:app/widgets/custom_dropdown.dart';
import 'package:flutter/material.dart';
import 'package:app/widgets/custom_textfield.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

class Section1 {
  final textFieldPadding = EdgeInsets.all(20);
  final dropDownMargin = EdgeInsets.only(top: 20, bottom: 20, left: 20, right: 20);

  List<Widget> section1Forms({required BuildContext context}) {
    return [
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'name',
          topLabel: 'Patient Name:',
          textFieldLabel: 'Name:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'age',
          topLabel: 'Patient Age:',
          textFieldLabel: 'Age:',
        ),
      ),
      Container(
        margin: dropDownMargin,
        child: CustomDropDown(
          name: 'gender',
          label: 'Gender',
          hintText: 'Select Gender:',
          dropDownItems: ["male", "female", "other"],
          validator: FormBuilderValidators.compose([FormBuilderValidators.required(context)]),
        ),
      ),
      Container(
        margin: dropDownMargin,
        child: CustomDropDown(
          name: 'purposeOfVisit',
          label: 'Purpose Of Visit',
          hintText: 'Select:',
          dropDownItems: ["evaluation", "treatment", "second Opinion", "legal", "MVA", "other"],
          validator: FormBuilderValidators.compose([FormBuilderValidators.required(context)]),
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'referralSource',
          topLabel: 'Referral Source:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'treatingDentist',
          topLabel: 'Treating Dentist:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Container(
        margin: dropDownMargin,
        child: CustomDropDown(
          name: 'personalHistory',
          label: 'Personal History:',
          hintText: 'Select:',
          dropDownItems: ["single", "married", "divorce", "seperated", "widowed", "children"],
          validator: FormBuilderValidators.compose([FormBuilderValidators.required(context)]),
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'occupation',
          topLabel: 'Occupation:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'allergiesToMedication',
          topLabel: 'Allergies To Medication:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'primaryCarePhysician',
          topLabel: 'Primary Care Physician:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'primaryDentist',
          topLabel: 'Primary Dentist:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'anyOtherPhyscian',
          topLabel: 'Any Other Physcian:',
          textFieldLabel: 'Enter:',
        ),
      ),

      /// [ Make this a seperate widget.]
      // Container(child: Text('')),
      // Container(
      //   width: 1000,
      //   color: Colors.red,
      //   padding: textFieldPadding,
      //   child: CustomFormTextFeild(
      //     name: 'additionalNotes',
      //     topLabel: 'Additional Notes:',
      //     textFieldLabel: 'Enter:',
      //   ),
      // ),
      // Container(child: Text('')),
    ];
  }
}


 // Container(
      //   child: FormBuilderTextField(
      //     name: 'name',
      //     decoration: InputDecoration(
      //       labelText: 'Name:',
      //       labelStyle: GoogleFonts.poppins(),
      //       floatingLabelBehavior: FloatingLabelBehavior.never,
      //       filled: true,
      //       fillColor: Utiliy.fullgreyBackground,
      //       border: OutlineInputBorder(
      //         borderRadius: BorderRadius.circular(5),
      //       ),
      //     ),
      //   ),
      // ),