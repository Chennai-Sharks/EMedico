import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomDropDown extends StatelessWidget {
  final String name;
  final String label;
  final String hintText;
  final String? initialDropDownValue;
  final List<String?> dropDownItems;
  final String? Function(String?)? validator;

  CustomDropDown({
    required this.name,
    required this.label,
    required this.hintText,
    required this.dropDownItems,
    this.initialDropDownValue,
    this.validator,
  });

  @override
  Widget build(BuildContext context) {
    return FormBuilderDropdown(
      name: name, //'gender',
      decoration: InputDecoration(
        labelText: label, //'Gender',
        labelStyle: GoogleFonts.poppins(
          fontWeight: FontWeight.bold,
          fontSize: 20,
          color: Colors.black,
        ),
      ),
      allowClear: true,
      focusColor: Colors.transparent,

      hint: Text(
        hintText, // 'Select Gender',
        style: GoogleFonts.poppins(
          fontSize: 18,
        ),
      ),
      validator: validator,
      items: dropDownItems
          .map((item) => DropdownMenuItem(
                value: item,
                child: Center(
                  child: Text(
                    '$item',
                    textAlign: TextAlign.center,
                  ),
                ),
              ))
          .toList(),
    );
  }
}
