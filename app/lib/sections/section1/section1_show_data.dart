import 'package:app/widgets/custom_showData.dart';
import 'package:flutter/material.dart';
import 'package:recase/recase.dart';

class Section1ShowData {
  List<Widget> section1ShowData({
    required BuildContext context,
    required Map<String, dynamic> data,
  }) {
    return data.entries.map((data) {
      ReCase label = ReCase(data.key);

      return ShowDataWidget(
        label: label.titleCase,
        value: data.value,
      );
    }).toList();
  }
}
