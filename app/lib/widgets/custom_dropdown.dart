import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomDropDown extends StatelessWidget {
  final String label;
  final String? initialDropDownValue;
  final List<String?>? dropDownItems;
  final void Function(String?)? onChange;
  CustomDropDown({
    required this.label,
    this.dropDownItems,
    this.initialDropDownValue,
    this.onChange,
  });
  @override
  Widget build(BuildContext context) {
    return Row(children: [
      Container(
        child: AutoSizeText(
          '$label :',
          style: GoogleFonts.poppins(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      StatefulBuilder(
        builder: (context, setDropState) {
          return Container(
            padding: const EdgeInsets.all(10),
            width: MediaQuery.of(context).size.width * 0.12,
            // alignment: Alignment.center,
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
                    fontSize: 20,
                  ),
                  underline: Container(
                    height: 2,
                    color: Colors.white,
                  ),
                  onChanged: (newValue) {},
                  items: dropDownItems!.map<DropdownMenuItem<String>>((value) {
                    return DropdownMenuItem<String>(
                      value: value,
                      child: Center(
                        child: Text(
                          value!,
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ),
          );
        },
      )
    ]);
  }
}
