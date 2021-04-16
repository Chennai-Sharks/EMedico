import 'package:app/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomFormTextFeild extends StatefulWidget {
  final String name;
  final String topLabel;
  final String textFieldLabel;
  final String? Function(String?)? validatorFunction;
  // final void Function(String?)? onSaved;
  // final FocusNode? focusNode;

  CustomFormTextFeild({
    required this.topLabel,
    required this.textFieldLabel,
    required this.name,
    this.validatorFunction,
    // required this.onSaved,
    // required this.focusNode,
  });
  @override
  _CustomFormTextFeildState createState() => _CustomFormTextFeildState();
}

class _CustomFormTextFeildState extends State<CustomFormTextFeild> {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SelectableText(
          widget.topLabel,
          style: GoogleFonts.poppins(
            fontSize: 18,
            fontWeight: FontWeight.w500,
          ),
        ),
        FormBuilderTextField(
          name: widget.name,
          decoration: InputDecoration(
            labelText: widget.textFieldLabel,
            labelStyle: GoogleFonts.poppins(),
            floatingLabelBehavior: FloatingLabelBehavior.never,
            filled: true,
            fillColor: Utility.fullgreyBackground,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide: BorderSide.none,
            ),
            focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: Utility.primaryColor,
              ),
            ),
          ),
          validator: widget.validatorFunction,
          // focusNode: widget.focusNode,
          // onSaved: widget.onSaved,
        ),
      ],
    );
  }
}
