import 'package:app/widgets/custom_dropdown.dart';
import 'package:app/widgets/custom_slider.dart';
import 'package:flutter/material.dart';
import 'package:app/widgets/custom_textfield.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:google_fonts/google_fonts.dart';

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
          name: 'dpid',
          topLabel: 'Enter Patient ID:',
          textFieldLabel: 'Enter:',
          validatorFunction: FormBuilderValidators.compose(
            [
              FormBuilderValidators.required(context),
              FormBuilderValidators.numeric(context),
            ],
          ),
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'age',
          topLabel: 'Patient Age:',
          textFieldLabel: 'Age:',
          validatorFunction: FormBuilderValidators.compose(
            [
              FormBuilderValidators.required(context),
              FormBuilderValidators.numeric(context),
            ],
          ),
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
      Container(),
      Container(
        margin: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'primaryCarePhysician',
          topLabel: 'Primary Care Physician:',
          textFieldLabel: 'Enter:',
        ),
      ),
    ];
  }

  List<Widget> secondPartForms({required bool isMobile, required BuildContext context}) {
    final textFieldPadding = EdgeInsets.only(
      top: 10,
      bottom: 10,
      left: isMobile ? 20 : MediaQuery.of(context).size.width * 0.18,
      right: isMobile ? 20 : MediaQuery.of(context).size.width * 0.18,
    );

    return [
      SizedBox(
        height: 10,
      ),
      SelectableText(
        'History of Presenting Illness',
        style: GoogleFonts.poppins(
          fontSize: isMobile ? 25 : 30,
        ),
        textAlign: TextAlign.center,
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'onset',
          topLabel: 'Onset',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'location',
          topLabel: 'Location',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'chronicity',
          topLabel: 'Chronicity',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'frequence',
          topLabel: 'Frequence',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'duration',
          topLabel: 'Duration',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomSlider(
          name: 'intensity',
          topLabel: "Intensity:",
          floatingLabel: "Select Intensity",
          intialValue: 5,
          max: 10,
          min: 0,
          noOfSeperations: 10,
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomSlider(
          name: 'backgroundPain',
          topLabel: "Background Pain:",
          floatingLabel: "Select Background Pain Level",
          intialValue: 5,
          max: 10,
          min: 0,
          noOfSeperations: 10,
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'quality',
          topLabel: 'Quality:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'treatments',
          topLabel: 'Treatments:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'aggravatingFactors',
          topLabel: 'Aggravating Factors:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'RelievingFactors',
          topLabel: 'Relieving Factors:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'temporalChar',
          topLabel: 'Temporal characteristics:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'associatedFeatures',
          topLabel: 'Associated features:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'referralPattern',
          topLabel: 'Referral pattern:',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'sleep',
          topLabel: 'Sleep:',
          textFieldLabel: 'Enter:',
        ),
      ),
      SizedBox(height: 20),
      SelectableText(
        'Chief Complaints: (In order of significance)',
        style: GoogleFonts.poppins(
          fontSize: isMobile ? 25 : 25,
        ),
        textAlign: TextAlign.center,
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'chiefComplaints',
          topLabel: 'Chief Complaints:',
          textInputType: TextInputType.multiline,
          maxLines: 5,
        ),
      ),
      SelectableText(
        'Additional Concerns',
        style: GoogleFonts.poppins(
          fontSize: isMobile ? 25 : 25,
        ),
        textAlign: TextAlign.center,
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'additionalConcerns',
          topLabel: 'Additional Concerns:',
          textInputType: TextInputType.multiline,
          maxLines: 5,
        ),
      ),
    ];
  }
}
