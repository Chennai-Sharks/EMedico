import 'package:flutter/material.dart';

class CustomDialog {
  static void showCustomDialog({
    required BuildContext context,
    Widget? child,
  }) {
    showGeneralDialog(
        barrierDismissible: true,
        barrierLabel: 'hello',
        context: context,
        pageBuilder: (ctx, _, __) {
          return Dialog(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15.0),
            ),
            child: child,
          );
        });
  }
}
