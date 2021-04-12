import 'package:flutter/material.dart';
import 'package:enhanced_drop_down/enhanced_drop_down.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: EnhancedDropDown.withData(
            dropdownLabelTitle: "My Things",
            dataSource: ["A", "B"],
            defaultOptionText: "Choose",
            valueReturned: (chosen) {
              print(chosen);
            }),
      ),
    );
  }
}
