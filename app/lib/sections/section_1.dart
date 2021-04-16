import 'package:flutter/material.dart';
import 'package:app/widgets/custom_textfield.dart';

class Section1 {
  List<Widget> section1Forms() {
    return [
      Padding(
        padding: const EdgeInsets.all(10),
        child: CustomFormTextFeild(
          fieldName: 'name',
          topLabel: 'Patient Name:',
          textFieldLabel: 'Name:',
        ),
      ),
      Padding(
        padding: const EdgeInsets.all(10),
        child: CustomFormTextFeild(
          fieldName: 'age',
          topLabel: 'Patient Age:',
          textFieldLabel: 'Age:',
        ),
      ),
      Container(child: Text('d'), color: Colors.red),
      Container(child: Text('d'), color: Colors.yellow),
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