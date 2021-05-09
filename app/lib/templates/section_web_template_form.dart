import 'package:app/utils/utils.dart';
import 'package:app/widgets/custom_app_bar.dart';
import 'package:app/widgets/web_side_nav_bar.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:google_fonts/google_fonts.dart';

/// [ Extra Widgets are optional but don't give it as null. if it is not needed give []
class SectionWebTemplateForm extends StatelessWidget {
  final List<Widget> widget1;
  final GlobalKey<FormBuilderState>? formKey;
  final String sectionName;
  final List<Widget>? extraWidget1;
  final Widget? extraWidget1Title;
  final List<Widget>? extraWidget2;
  final Widget? extraWidget2Title;
  final ScrollController controller;
  final void Function()? onSubmitForm;

  SectionWebTemplateForm({
    required this.widget1,
    required this.sectionName,
    required this.controller,
    this.formKey,
    this.extraWidget1,
    this.extraWidget2,
    this.onSubmitForm,
    this.extraWidget1Title,
    this.extraWidget2Title,
  });

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: CustomAppBar(),
      backgroundColor: Utility.modernWhiteBackground,
      body: Row(
        children: [
          WebSideNavBar(
            isTablet: false,
          ),
          InkWell(
            enableFeedback: false,
            mouseCursor: MouseCursor.defer,
            focusColor: Utility.modernWhiteBackground,
            splashColor: Utility.modernWhiteBackground,
            hoverColor: Utility.modernWhiteBackground,
            highlightColor: Utility.modernWhiteBackground,
            onTap: () => FocusScope.of(context).unfocus(),
            child: Scrollbar(
              isAlwaysShown: true,
              interactive: true,
              controller: controller,
              child: SingleChildScrollView(
                controller: controller,
                child: Column(
                  children: [
                    SizedBox(height: 20),
                    Text(
                      '${sectionName}',
                      style: GoogleFonts.rubik(
                        fontSize: 35,
                      ),
                    ),
                    Card(
                      elevation: 10,
                      shadowColor: Colors.white,
                      margin: const EdgeInsets.only(left: 40, right: 40, top: 20, bottom: 40),
                      child: Container(
                        width: width - width * 0.16 - 80,
                        child: FormBuilder(
                          key: formKey,
                          child: StaggeredGridView.count(
                            physics: const NeverScrollableScrollPhysics(),
                            shrinkWrap: true,
                            staggeredTiles: [
                              ...widget1.map((_) => StaggeredTile.fit(1)).toList(),
                              StaggeredTile.fit(3),
                              ...extraWidget1!.map((_) => StaggeredTile.fit(3)).toList(),
                              StaggeredTile.fit(3),
                              ...extraWidget2!.map((_) => StaggeredTile.fit(3)).toList(),
                              StaggeredTile.fit(3),
                            ],
                            crossAxisCount: 3,
                            mainAxisSpacing: 10,
                            children: [
                              ...widget1,
                              extraWidget1Title ?? Container(),
                              ...extraWidget1 ?? [Container()],
                              extraWidget2Title ?? Container(),
                              ...extraWidget2 ?? [Container()],
                              Container(
                                height: 40,
                                margin: EdgeInsets.only(
                                  left: (width - width * 0.160 - 80) * 0.45,
                                  right: (width - width * 0.160 - 80) * 0.45,
                                  top: 20,
                                  bottom: 40,
                                ),
                                child: ElevatedButton(
                                  onPressed: onSubmitForm,
                                  style: ElevatedButton.styleFrom(
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                  ),
                                  child: AutoSizeText(
                                    'SUBMIT',
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
