import 'package:flutter/material.dart';

class AuthScreenTemplate extends StatelessWidget {
  final double givenWidth;
  final double givenHeight;
  final Widget givenChild;

  AuthScreenTemplate({
    required this.givenChild,
    required this.givenHeight,
    required this.givenWidth,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 20,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15),
      ),
      shadowColor: Colors.white,
      child: Container(
        width: givenWidth,
        height: givenHeight,
        child: givenChild,
      ),
    );
  }
}
