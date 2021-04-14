import 'package:app/templates/section1_web_template.dart';
import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

/// [ Mobile yet to do. ]

class Section1Screen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, sizingInformation) {
        if ((sizingInformation.isDesktop) && sizingInformation.screenSize.width >= 1000) {
          print(sizingInformation.deviceScreenType);
          return Section1WebTemplate(
            isTablet: false,
          );
        } else if (sizingInformation.isTablet ||
            (sizingInformation.screenSize.width >= 950 && sizingInformation.screenSize.width < 1000)) {
          return Section1WebTemplate(
            isTablet: true,
          );
        } else
          return Container(
            child: Text('mobile yet to do'),
          );
      },
    );
  }
}
