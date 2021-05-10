import 'dart:convert';
import 'dart:io';

import 'package:app/providers/util_provider.dart';
import 'package:app/sections/section1/section1_show_data.dart';
import 'package:app/templates/section_mobile_showData_template.dart';
import 'package:app/templates/section_tablet_showData_template.dart';
import 'package:app/templates/section_web_showData_template.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:responsive_builder/responsive_builder.dart';

/// [ Platform.isWindows does not work with flutter web. so that kIsWeb Constant is used.]

class Section1ShowDataScreen extends StatefulWidget {
  @override
  _Section1ShowDataScreenState createState() => _Section1ShowDataScreenState();
}

class _Section1ShowDataScreenState extends State<Section1ShowDataScreen> {
  final Section1ShowData section1showData = Section1ShowData();

  final ScrollController _controller = ScrollController();

  Future<http.Response> getData() async {
    final did = await UtilityProvider.getDocId();
    print(did);
    return http.get(
      Uri.parse('http://localhost:3000/api/get/section1/60990f363f4521435044fe2e'),
      headers: {
        HttpHeaders.contentTypeHeader: "application/json",
        "did": "$did",
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<http.Response>(
      future: getData(),
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
                print(responseData);
                responseData.remove('_id');
                responseData.remove('__v');
                responseData.remove('mongoid');
                responseData.remove('date');
                responseData.update('age', (value) => value.toString());
                final Map<String, dynamic> historyOfPresentingIll =
                    responseData.remove('historyOfpresentingIllness') as Map<String, dynamic>;

                if ((kIsWeb ? sizingInformation.isDesktop : Platform.isWindows) &&
                    sizingInformation.screenSize.width >= 1125) {
                  return SectionWebShowDataTemplate(
                    widget1: section1showData.section1ShowData(context: context, data: responseData),
                    sectionName: 'Section 1',
                    controller: _controller,
                    extraWidget2: section1showData.historyOfPresentingIllnessTitle(),
                    extraWidget1: section1showData.historyOfPresentingIllness(data: historyOfPresentingIll),
                  );
                } else if ((sizingInformation.screenSize.width >= 800 && sizingInformation.screenSize.width < 1125)) {
                  return SectionTabletShowDataTemplate(
                    widget1: section1showData.section1ShowData(context: context, data: responseData),
                    sectionName: 'Section 1',
                    controller: _controller,
                    extraWidget2: section1showData.historyOfPresentingIllnessTitle(),
                    extraWidget1: section1showData.historyOfPresentingIllness(data: historyOfPresentingIll),
                  );
                } else
                  return SectionMobileShowDataTemplate(
                    widget1: section1showData.section1ShowData(context: context, data: responseData),
                    sectionName: 'Section 1',
                    controller: _controller,
                    extraWidget2: section1showData.historyOfPresentingIllnessTitle(),
                    extraWidget1: section1showData.historyOfPresentingIllness(data: historyOfPresentingIll),
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


// 