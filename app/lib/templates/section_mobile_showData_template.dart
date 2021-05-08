import 'package:app/widgets/custom_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:app/widgets/nav_drawer_mobile.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:google_fonts/google_fonts.dart';

class SectionMobileShowDataTemplate extends StatelessWidget {
  final List<Widget> widget1;
  final String sectionName;
  final List<Widget>? extraWidget1;
  final Widget? extraWidget2;
  final ScrollController controller;
  final void Function()? onNextSection;

  SectionMobileShowDataTemplate({
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
      appBar: CustomAppBar(),
      drawer: CustomDrawer(),
      body: Scrollbar(
        interactive: true,
        isAlwaysShown: true,
        child: Container(
          width: MediaQuery.of(context).size.width,
          child: StaggeredGridView.count(
            crossAxisCount: 1,
            staggeredTiles: [
              StaggeredTile.fit(1),
              ...widget1.map((_) => StaggeredTile.fit(1)).toList(),
              StaggeredTile.fit(1),
              ...extraWidget1!.map((_) => StaggeredTile.fit(1)).toList(),
              StaggeredTile.fit(1),
            ],
            children: [
              Container(
                alignment: Alignment.center,
                margin: const EdgeInsets.all(10),
                child: Text(
                  '${sectionName}',
                  style: GoogleFonts.poppins(
                    fontSize: 30,
                  ),
                ),
              ),
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
    );
  }
}
