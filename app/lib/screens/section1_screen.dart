import 'dart:io';

import 'package:app/providers/section1_provider.dart';
import 'package:app/sections/section_1.dart';
import 'package:app/templates/section_mobile_template.dart';
import 'package:app/templates/section_tablet_template.dart';
import 'package:app/templates/section_web_template.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:velocity_x/velocity_x.dart' show VxToast;

/// [ Platform.isWindows does not work with flutter web. so that kIsWeb Constant is used.]

class Section1Screen extends StatefulWidget {
  @override
  _Section1ScreenState createState() => _Section1ScreenState();
}

class _Section1ScreenState extends State<Section1Screen> {
  final Section1 section1 = Section1();

  final _formKey = GlobalKey<FormBuilderState>();

  final ScrollController _controller = ScrollController();

  Future<void> submitForm(BuildContext context) async {
    final closeLoading = VxToast.showLoading(
      context,
      msg: 'submitting',
      textColor: Colors.white,
    );
    await Section1Provider.submitHandlerSection1(
      formkey: _formKey,
      context: context,
    );
    closeLoading();
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, sizingInformation) {
        if ((kIsWeb ? sizingInformation.isDesktop : Platform.isWindows) && sizingInformation.screenSize.width >= 1125) {
          return SectionWebTemplate(
            forms: section1.section1Forms(context: context),
            sectionName: 'Section 1',
            formKey: _formKey,
            extraWidget1: section1.secondPartForms(isMobile: false, context: context),
            onSubmitForm: () async => await submitForm(context),
            controller: _controller,
          );
        } else if ((sizingInformation.screenSize.width >= 800 && sizingInformation.screenSize.width < 1125)) {
          return SectionTabletTemplate(
            forms: section1.section1Forms(context: context),
            extraWidget1: section1.secondPartForms(isMobile: false, context: context),
            formKey: _formKey,
            onSubmitForm: () async => await submitForm(context),
            sectionName: 'Section1',
          );
        } else
          return SectionMobileTemplate(
            forms: section1.section1Forms(context: context),
            extraWidget1: section1.secondPartForms(isMobile: true, context: context),
            formKey: _formKey,
            onSubmitForm: () async => await submitForm(context),
            sectionName: 'Section1',
          );
      },
    );
  }
}
