import 'package:app/utils/utils.dart';
import 'package:app/widgets/custom_app_bar.dart';
import 'package:app/widgets/web_side_nav_bar.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:google_fonts/google_fonts.dart';

class SectionTabletShowDataTemplate extends StatelessWidget {
  final List<Widget> widget1;
  final String sectionName;
  final List<Widget>? extraWidget1;
  final Widget? extraWidget2;
  final ScrollController controller;
  final void Function()? onNextSection;

  SectionTabletShowDataTemplate({
    required this.widget1,
    required this.sectionName,
    required this.controller,
    this.extraWidget1,
    this.extraWidget2,
    this.onNextSection,
  });

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: Utility.modernWhiteBackground,
      appBar: CustomAppBar(),
      body: Row(
        children: [
          WebSideNavBar(
            isTablet: true,
          ),
          Expanded(
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
                      shadowColor: Utility.modernWhiteBackground,
                      margin: const EdgeInsets.only(top: 20, bottom: 40),
                      child: Container(
                        width: width - width * 0.16,
                        child: StaggeredGridView.count(
                          physics: const NeverScrollableScrollPhysics(),
                          shrinkWrap: true,
                          staggeredTiles: [
                            ...widget1.map((_) => StaggeredTile.fit(1)).toList(),
                            StaggeredTile.fit(2),
                            ...extraWidget1!.map((_) => StaggeredTile.fit(1)).toList(),
                            StaggeredTile.fit(2),
                          ],
                          crossAxisCount: 2,
                          children: [
                            ...widget1,
                            extraWidget2 ?? Container(),
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
                                onPressed: onNextSection,
                                style: ElevatedButton.styleFrom(
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                ),
                                child: AutoSizeText(
                                  'NEXT',
                                ),
                              ),
                            ),
                          ],
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
