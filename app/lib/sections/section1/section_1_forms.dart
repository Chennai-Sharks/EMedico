import 'package:app/widgets/custom_dropdown.dart';
import 'package:app/widgets/custom_slider.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:app/widgets/custom_textfield.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:google_fonts/google_fonts.dart';

class Section1Form {
  final textFieldPadding = EdgeInsets.all(10);
  final dropDownMargin = EdgeInsets.only(top: 20, bottom: 20, left: 20, right: 20);

  List<Widget> section1Forms({required BuildContext context, Map<String, dynamic>? data}) {
    return [
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'name',
          topLabel: 'Patient Name:',
          textFieldLabel: 'Name:',
          initialValuefromDatabase: data != null ? data['name'] : '',
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
          initialValuefromDatabase: data != null ? data['dpid'] : '',
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
          initialValuefromDatabase: data != null ? data['age'] : '',
        ),
      ),
      Container(
        margin: dropDownMargin,
        child: CustomDropDown(
          name: 'gender',
          label: 'Gender',
          hintText: 'Select Gender:',
          dropDownItems: ["male", "female", "other"],
          initialValuefromDatabase: data != null ? data['gender'] : null,
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
          initialValuefromDatabase: data != null ? data['purposeOfVisit'] : null,
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
          initialValuefromDatabase: data != null ? data['personalHistory'] : null,
          validator: FormBuilderValidators.compose([FormBuilderValidators.required(context)]),
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'referralSource',
          topLabel: 'Referral Source:',
          initialValuefromDatabase: data != null ? data['referralSource'] : '',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'treatingDentist',
          topLabel: 'Treating Dentist:',
          initialValuefromDatabase: data != null ? data['treatingDentist'] : '',
          textFieldLabel: 'Enter:',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'occupation',
          topLabel: 'Occupation:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['occupation'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'allergiesToMedication',
          topLabel: 'Allergies To Medication:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['allergiesToMedication'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'primaryDentist',
          topLabel: 'Primary Dentist:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['primaryDentist'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'anyOtherPhyscian',
          topLabel: 'Any Other Physcian:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['anyOtherPhyscian'] : '',
        ),
      ),
      Container(
        margin: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'primaryCarePhysician',
          topLabel: 'Primary Care Physician:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['primaryCarePhysician'] : '',
        ),
      ),
    ];
  }

  List<Widget> secondPartForms({
    required bool isMobile,
    required BuildContext context,
    Map<String, dynamic>? data,
  }) {
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
      AutoSizeText(
        'History of Presenting Illness',
        style: GoogleFonts.rubik(
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
          initialValuefromDatabase: data != null ? data['onset'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'location',
          topLabel: 'Location',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['location'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'chronicity',
          topLabel: 'Chronicity',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['chronicity'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'frequence',
          topLabel: 'Frequence',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['frequence'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'duration',
          topLabel: 'Duration',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['duration'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomSlider(
          name: 'intensity',
          topLabel: "Intensity:",
          floatingLabel: "Select Intensity",
          intialValue: data != null ? double.parse(data['intensity']) : 5,
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
          intialValue: data != null ? double.parse(data['backgroundPain']) : 5,
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
          initialValuefromDatabase: data != null ? data['quality'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'treatments',
          topLabel: 'Treatments:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['treatments'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'aggravatingFactors',
          topLabel: 'Aggravating Factors:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['aggravatingFactors'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'RelievingFactors',
          topLabel: 'Relieving Factors:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['RelievingFactors'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'temporalChar',
          topLabel: 'Temporal characteristics:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['temporalChar'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'associatedFeatures',
          topLabel: 'Associated features:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['associatedFeatures'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'referralPattern',
          topLabel: 'Referral pattern:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['referralPattern'] : '',
        ),
      ),
      Padding(
        padding: textFieldPadding,
        child: CustomFormTextFeild(
          name: 'sleep',
          topLabel: 'Sleep:',
          textFieldLabel: 'Enter:',
          initialValuefromDatabase: data != null ? data['sleep'] : '',
        ),
      ),
      SizedBox(height: 20),
      AutoSizeText(
        'Chief Complaints: (In order of significance)',
        style: GoogleFonts.rubik(
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
          initialValuefromDatabase: data != null ? data['chiefComplaints'] : 'p',
        ),
      ),
      AutoSizeText(
        'Additional Concerns',
        style: GoogleFonts.rubik(
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
          initialValuefromDatabase: data != null ? data['additionalConcerns'] : '',
          maxLines: 5,
        ),
      ),
    ];
  }
}
