import 'package:app/widgets/custom_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:app/widgets/nav_drawer_mobile.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:google_fonts/google_fonts.dart';

class SectionMobileTemplateForm extends StatelessWidget {
  final List<Widget> widget1;
  final GlobalKey<FormBuilderState>? formKey;
  final String sectionName;
  final List<Widget>? extraWidget1;
  final Widget? extraWidget1Title;
  final List<Widget>? extraWidget2;
  final Widget? extraWidget2Title;
  final void Function()? onSubmitForm;

  SectionMobileTemplateForm({
    required this.widget1,
    required this.sectionName,
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
      drawer: CustomDrawer(),
      body: Scrollbar(
        interactive: true,
        isAlwaysShown: true,
        child: Container(
          width: MediaQuery.of(context).size.width,
          child: FormBuilder(
            key: formKey,
            child: StaggeredGridView.count(
              crossAxisCount: 1,
              staggeredTiles: [
                StaggeredTile.fit(1),
                ...widget1.map((_) => StaggeredTile.fit(1)).toList(),
                StaggeredTile.fit(1),
                ...extraWidget1!.map((_) => StaggeredTile.fit(1)).toList(),
                StaggeredTile.fit(2),
                ...extraWidget2!.map((_) => StaggeredTile.fit(1)).toList(),
                StaggeredTile.fit(1),
              ],
              children: [
                Container(
                  alignment: Alignment.center,
                  margin: const EdgeInsets.only(top: 20),
                  child: Text(
                    '${sectionName}',
                    style: GoogleFonts.rubik(
                      fontSize: 32,
                    ),
                  ),
                ),
                ...widget1,
                extraWidget1Title ?? Container(),
                ...extraWidget1 ?? [Container()],
                extraWidget2Title ?? Container(),
                ...extraWidget2 ?? [Container()],
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
    );
  }
}
