import 'package:app/widgets/custom_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:app/widgets/nav_drawer_mobile.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class SectionMobileTemplate extends StatelessWidget {
  final List<Widget> forms;
  final GlobalKey<FormBuilderState> formKey;

  SectionMobileTemplate({
    required this.forms,
    required this.formKey,
  });

  @override
  Widget build(BuildContext context) {
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
              shrinkWrap: true,
              staggeredTiles: [
                ...forms.map((_) => StaggeredTile.fit(1)).toList(),
                StaggeredTile.fit(1),
              ],
              children: [
                ...forms,
                ElevatedButton(
                  onPressed: () {}, // this function will be coming from section_1_form.dart
                  child: AutoSizeText(
                    'SUBMIT',
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
