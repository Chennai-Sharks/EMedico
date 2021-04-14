import 'package:app/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomTextFeild extends StatefulWidget {
  final String topLabel;
  final String textFieldLabel;
  final String? Function(String?)? validatorFunction;
  final void Function(String?)? onSaved;
  final FocusNode? focusNode;

  CustomTextFeild({
    required this.topLabel,
    required this.focusNode,
    required this.textFieldLabel,
    required this.validatorFunction,
    required this.onSaved,
  });
  @override
  _CustomTextFeildState createState() => _CustomTextFeildState();
}

class _CustomTextFeildState extends State<CustomTextFeild> {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          child: SelectableText(
            widget.topLabel,
            style: GoogleFonts.poppins(
              fontSize: 20,
            ),
          ),
        ),
        TextFormField(
          decoration: InputDecoration(
            labelText: widget.textFieldLabel,
            labelStyle: GoogleFonts.poppins(),
            floatingLabelBehavior: FloatingLabelBehavior.never,
            filled: true,
            fillColor: Utiliy.fullgreyBackground,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide: BorderSide.none,
            ),
          ),
          validator: widget.validatorFunction,
          focusNode: widget.focusNode,
          onSaved: widget.onSaved,
        ),
      ],
    );
  }
}
