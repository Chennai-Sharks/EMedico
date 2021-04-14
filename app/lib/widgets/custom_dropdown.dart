import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomDropDown extends StatelessWidget {
  final String label;
  final String? initialDropDownValue;
  final List<String?>? dropDownItems;
  final void Function(String?)? onChange;
  final double? fontSize;
  final double? dropDownWidth;
  CustomDropDown({
    required this.label,
    this.dropDownItems,
    this.initialDropDownValue,
    this.onChange,
    this.dropDownWidth,
    this.fontSize,
  });
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          child: AutoSizeText(
            '$label :',
            style: GoogleFonts.poppins(
              fontSize: 25,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        StatefulBuilder(
          builder: (context, setDropState) {
            return Container(
              padding: const EdgeInsets.only(top: 10, bottom: 10),
              width: dropDownWidth ?? MediaQuery.of(context).size.width * 0.22,
              child: Card(
                elevation: 4,
                shadowColor: Colors.white,
                child: InkWell(
                  onTap: () {},
                  child: DropdownButton(
                    value: initialDropDownValue,
                    isExpanded: true,
                    icon: Container(
                      margin: const EdgeInsets.only(right: 10),
                      child: Icon(Icons.arrow_downward),
                    ),
                    iconSize: 24,
                    elevation: 8,
                    style: GoogleFonts.poppins(
                      fontSize: fontSize ?? 20,
                    ),
                    underline: Container(
                      height: 2,
                      // color: Colors.white,
                    ),
                    onChanged: onChange,
                    items: dropDownItems!.map<DropdownMenuItem<String>>((value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Center(
                          child: Text(
                            value!,
                            style: GoogleFonts.poppins(
                              color: Colors.black,
                              fontSize: fontSize ?? 20,
                            ),
                          ),
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ),
            );
          },
        ),
      ],
    );
  }
}
