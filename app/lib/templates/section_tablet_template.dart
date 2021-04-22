import 'package:app/widgets/custom_app_bar.dart';
import 'package:app/widgets/web_side_nav_bar.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:google_fonts/google_fonts.dart';

class SectionTabletTemplate extends StatelessWidget {
  final List<Widget> forms;
  final GlobalKey<FormBuilderState> formKey;
  final List<Widget>? extraWidget1;
  final String sectionName;

  final Widget? extraWidget2;
  final void Function()? onSubmitForm;

  SectionTabletTemplate({
    required this.forms,
    required this.formKey,
    this.extraWidget1,
    this.extraWidget2,
    this.onSubmitForm,
    required this.sectionName,
  });

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: CustomAppBar(),
      body: Row(
        children: [
          WebSideNavBar(
            isTablet: true,
          ),
          Expanded(
            child: InkWell(
              enableFeedback: false,
              mouseCursor: MouseCursor.defer,
              focusColor: Colors.white,
              splashColor: Colors.white,
              hoverColor: Colors.white,
              highlightColor: Colors.white,
              onTap: () => FocusScope.of(context).unfocus(),
              child: Scrollbar(
                interactive: true,
                isAlwaysShown: true,
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      SizedBox(height: 20),
                      Text(
                        '${sectionName}',
                        style: GoogleFonts.poppins(
                          fontSize: 40,
                        ),
                      ),
                      Card(
                        elevation: 10,
                        shadowColor: Colors.white,
                        margin: const EdgeInsets.only(top: 20, bottom: 40),
                        child: Container(
                          width: width - width * 0.16,
                          child: FormBuilder(
                            key: formKey,
                            child: StaggeredGridView.count(
                              physics: const NeverScrollableScrollPhysics(),
                              shrinkWrap: true,
                              staggeredTiles: [
                                ...forms.map((_) => StaggeredTile.fit(1)).toList(),
                                ...extraWidget1!.map((_) => StaggeredTile.fit(2)).toList(),
                                StaggeredTile.fit(2),
                              ],
                              crossAxisCount: 2,
                              children: [
                                ...forms,
                                ...extraWidget1 ?? [Container()],
                                Container(
                                  height: 40,
                                  margin: EdgeInsets.only(
                                    left: (width - width * 0.160) * 0.45,
                                    right: (width - width * 0.160) * 0.45,
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
          ),
        ],
      ),
    );
  }
}
