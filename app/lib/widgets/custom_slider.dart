import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomSlider extends StatelessWidget {
  final String name;
  final String topLabel;
  final int? noOfSeperations;
  final double min;
  final double max;
  final double intialValue;
  final String floatingLabel;
  final String? Function(double?)? validatorFunction;

  CustomSlider({
    required this.name,
    required this.topLabel,
    this.noOfSeperations,
    required this.floatingLabel,
    required this.intialValue,
    required this.max,
    required this.min,
    this.validatorFunction,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        AutoSizeText(
          topLabel,
          style: GoogleFonts.rubik(
            fontSize: 18,
            fontWeight: FontWeight.w500,
          ),
        ),
        FormBuilderSlider(
          name: name,
          initialValue: intialValue,
          min: min,
          max: max,
          divisions: noOfSeperations,
          label: floatingLabel,
          displayValues: DisplayValues.all,
          enabled: true,
          maxTextStyle: GoogleFonts.poppins(
            fontSize: 18,
          ),
          minTextStyle: GoogleFonts.poppins(
            fontSize: 18,
          ),
          textStyle: GoogleFonts.poppins(
            fontSize: 18,
          ),
          decoration: InputDecoration(
            border: OutlineInputBorder(
              borderRadius: BorderRadius.zero,
              borderSide: BorderSide.none,
            ),
          ),
          validator: validatorFunction,
        ),
      ],
    );
  }
}
