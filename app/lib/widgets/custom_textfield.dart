import 'package:app/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomFormTextFeild extends StatefulWidget {
  final String name;
  final String topLabel;
  final String? textFieldLabel;
  final String? Function(String?)? validatorFunction;
  final TextInputType? textInputType;
  final int? maxLines;
  final String? initialValuefromDatabase;

  CustomFormTextFeild({
    required this.topLabel,
    this.textFieldLabel,
    required this.name,
    this.validatorFunction,
    this.textInputType,
    this.maxLines,
    this.initialValuefromDatabase,
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
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: SelectableText(
            widget.topLabel,
            style: GoogleFonts.rubik(
              fontSize: 18,
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
        FormBuilderTextField(
          name: widget.name,
          initialValue: widget.initialValuefromDatabase,
          keyboardType: widget.textInputType,
          maxLines: widget.maxLines ?? 1,
          decoration: InputDecoration(
            labelText: widget.textFieldLabel,
            labelStyle: GoogleFonts.rubik(),
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
          validator: widget.validatorFunction ??
              FormBuilderValidators.compose(
                [
                  FormBuilderValidators.required(context),
                ],
              ),
        ),
      ],
    );
  }
}
