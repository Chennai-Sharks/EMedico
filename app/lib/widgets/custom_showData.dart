import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ShowDataWidget extends StatelessWidget {
  final String label;
  final String value;
  ShowDataWidget({
    required this.label,
    required this.value,
  });

  List<Widget> children() {
    return [
      SelectableText(
        '$label:',
        style: GoogleFonts.rubik(
          fontSize: 22,
          fontWeight: FontWeight.w500,
        ),
      ),
      SizedBox(height: 10),
      Container(
        // margin: const EdgeInsets.only(left: 20),
        child: SelectableText(
          value,
          style: GoogleFonts.rubik(
            fontSize: 19,
            // fontWeight: FontWeight.w400,
          ),
        ),
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 25, right: 10.0, top: 20, bottom: 20),
      child: MediaQuery.of(context).size.width < 800
          ? Row(
              children: children(),
            )
          : Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: children(),
            ),
    );
  }
}
