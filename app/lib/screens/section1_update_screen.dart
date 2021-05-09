import 'dart:io';
import 'dart:convert';

import 'package:app/sections/section1/section_1_forms.dart';
import 'package:app/templates/section_mobile_template_form.dart';
import 'package:app/templates/section_tablet_template_form.dart';
import 'package:app/templates/section_web_template_form.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:http/http.dart' as http;
import 'package:responsive_builder/responsive_builder.dart';

/// [ Update is now done using section_1_FORM ITSELF TO REMOVE UNNECESSARY CODE]
/// [ Platform.isWindows does not work with flutter web. so that kIsWeb Constant is used.]

class Section1UpdateScreen extends StatefulWidget {
  @override
  _Section1UpdateScreenState createState() => _Section1UpdateScreenState();
}

class _Section1UpdateScreenState extends State<Section1UpdateScreen> {
  final Section1Form section1Form = Section1Form();
  final _formKey = GlobalKey<FormBuilderState>();

  final ScrollController _controller = ScrollController();

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<http.Response>(
      future: http.get(Uri.parse('http://localhost:3000/api/get/section1/60963ba711885450c428e279')),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting)
          return Scaffold(
            appBar: AppBar(
              title: Text('Loading...'),
            ),
            body: Center(
              child: CircularProgressIndicator(),
            ),
          );
        else {
          print(snapshot.data!.statusCode);
          if (snapshot.data!.statusCode < 250 && snapshot.hasData) {
            return ResponsiveBuilder(
              builder: (context, sizingInformation) {
                final responseData = json.decode(snapshot.data!.body) as Map<String, dynamic>;

                /// [ Removed unwanted stuff ]
                responseData.remove('_id');
                responseData.remove('__v');
                responseData.remove('mongoid');
                responseData.remove('date');
                responseData.update('age', (value) => value.toString());

                /// [Seperating historyofpresenting illness from main data]
                final Map<String, dynamic> historyOfPresentingIll =
                    responseData.remove('historyOfpresentingIllness') as Map<String, dynamic>;

                /// [For Ui thing doing this.]
                historyOfPresentingIll['chiefComplaints'] = responseData['chiefComplaints'];
                historyOfPresentingIll['additionalConcerns'] = responseData['additionalConcerns'];
                if ((kIsWeb ? sizingInformation.isDesktop : Platform.isWindows) &&
                    sizingInformation.screenSize.width >= 1125) {
                  return SectionWebTemplateForm(
                    widget1: section1Form.section1Forms(
                      context: context,
                      data: responseData,
                    ),
                    sectionName: 'Update Section 1 Details',
                    formKey: _formKey,
                    extraWidget1: section1Form.secondPartForms(
                      isMobile: false,
                      context: context,
                      data: historyOfPresentingIll,
                    ),
                    extraWidget2: [],
                    onSubmitForm: null,
                    controller: _controller,
                  );
                } else if ((sizingInformation.screenSize.width >= 800 && sizingInformation.screenSize.width < 1125)) {
                  return SectionTabletTemplateForm(
                    widget1: section1Form.section1Forms(
                      context: context,
                      data: responseData,
                    ),
                    extraWidget1: section1Form.secondPartForms(
                      isMobile: false,
                      context: context,
                      data: historyOfPresentingIll,
                    ),
                    formKey: _formKey,
                    onSubmitForm: null,
                    sectionName: 'Update Section 1 Details',
                  );
                } else
                  return SectionMobileTemplateForm(
                    widget1: section1Form.section1Forms(
                      context: context,
                      data: responseData,
                    ),
                    extraWidget1: section1Form.secondPartForms(
                      isMobile: true,
                      context: context,
                      data: historyOfPresentingIll,
                    ),
                    formKey: _formKey,
                    onSubmitForm: null,
                    sectionName: 'Update Section 1 Details',
                  );
              },
            );
          } else
            return Scaffold(
              appBar: AppBar(
                title: Text('Loading...'),
              ),
              body: Center(
                child: Text(snapshot.data!.body),
              ),
            );
        }
      },
    );
  }
}
