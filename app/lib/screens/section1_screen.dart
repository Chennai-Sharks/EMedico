import 'dart:io';

import 'package:app/templates/section_mobile_template.dart';
import 'package:app/templates/section_tablet_template.dart';
import 'package:app/templates/section_web_template.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

/// [ Mobile yet to do. Platform.isWindows does not work with flutter web. so that kIsWeb]
/// [ Constant is used. ]

class Section1Screen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, sizingInformation) {
        if ((kIsWeb ? sizingInformation.isDesktop : Platform.isWindows) && sizingInformation.screenSize.width >= 1125) {
          return SectionWebTemplate();
        } else if ((sizingInformation.screenSize.width >= 800 && sizingInformation.screenSize.width < 1125)) {
          return SectionTabletTemplate();
        } else
          return SectionMobileTemplate();
      },
    );
  }
}
