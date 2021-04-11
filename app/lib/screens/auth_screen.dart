// import 'dart:convert';

import 'package:app/templates/auth_screen_template.dart';
import 'package:app/utils/utils.dart';
import 'package:app/widgets/auth_form.dart';
import 'package:flutter_svg/flutter_svg.dart';
// import 'package:http/http.dart' as http;

import 'package:responsive_builder/responsive_builder.dart';
import 'package:flutter/material.dart';

class AuthScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Container(
        width: width,
        height: height,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Utiliy.modernWhiteBackground,
        ),
        child: ResponsiveBuilder(
          builder: (context, sizingInformation) {
            if ((sizingInformation.isDesktop) && sizingInformation.screenSize.width >= 1000) {
              print(sizingInformation.deviceScreenType);
              return AuthScreenTemplate(
                givenHeight: height * 0.8,
                givenWidth: width * 0.6,
                givenChild: Row(
                  children: [
                    Expanded(
                      child: Container(
                        margin: EdgeInsets.all(
                          sizingInformation.isTablet
                              ? 20
                              : sizingInformation.screenSize.width > 1350
                                  ? 70
                                  : 40,
                        ),
                        child: SvgPicture.asset('images/medicine.svg'),
                      ),
                    ),
                    Expanded(
                      child: AuthForms(),
                    ),
                  ],
                ),
              );
            } else if (sizingInformation.isTablet ||
                (sizingInformation.screenSize.width >= 950 && sizingInformation.screenSize.width < 1000)) {
              return AuthScreenTemplate(
                givenHeight: height * 0.8,
                givenWidth: width * 0.6,
                givenChild: Row(),
              );
            } else
              return AuthScreenTemplate(
                givenHeight: height * 0.6,
                givenWidth: width * 0.85,
                givenChild: Row(),
              );
          },
        ),
      ),
    );
  }
}
