import 'dart:io';

import 'package:app/templates/auth_screen_template.dart';
import 'package:app/utils/utils.dart';
import 'package:app/widgets/auth_form.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_svg/flutter_svg.dart';

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
          color: Utility.modernWhiteBackground,
        ),
        child: ResponsiveBuilder(
          builder: (context, sizingInformation) {
            if ((kIsWeb ? sizingInformation.isDesktop : Platform.isWindows) &&
                sizingInformation.screenSize.width >= 1000) {
              return AuthScreenTemplate(
                givenHeight: height * 0.8,
                givenWidth: width * 0.6,
                givenChild: Row(
                  children: [
                    Expanded(
                      child: Container(
                        margin: EdgeInsets.all(
                          sizingInformation.isTablet && (kIsWeb ? false : !Platform.isWindows)
                              ? 20
                              : sizingInformation.screenSize.width > 1350
                                  ? 70
                                  : 40,
                        ),
                        child: SvgPicture.asset('images/medicine.svg'),
                      ),
                    ),
                    Expanded(
                      child: AuthForms(
                        isMobile: false,
                        isTablet: false,
                      ),
                    ),
                  ],
                ),
              );
            } else if (sizingInformation.isTablet ||
                (sizingInformation.screenSize.width >= 950 && sizingInformation.screenSize.width < 1000)) {
              return AuthScreenTemplate(
                givenHeight: height * 0.8,
                givenWidth: width * 0.6,
                givenChild: AuthForms(
                  isMobile: true,
                  isTablet: true,
                ),
              );
            } else
              return AuthScreenTemplate(
                givenHeight: height * 0.70,
                givenWidth: width * 0.85,
                givenChild: AuthForms(
                  isMobile: true,
                  isTablet: true,
                ),
              );
          },
        ),
      ),
    );
  }
}
