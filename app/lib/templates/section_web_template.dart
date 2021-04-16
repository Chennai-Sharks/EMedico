import 'package:app/widgets/custom_app_bar.dart';
import 'package:app/widgets/web_side_nav_bar.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class SectionWebTemplate extends StatelessWidget {
  final List<Widget> forms;
  final GlobalKey<FormBuilderState> formKey;

  SectionWebTemplate({
    required this.forms,
    required this.formKey,
  });

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: CustomAppBar(),
      body: Row(
        children: [
          WebSideNavBar(
            isTablet: false,
          ),
          InkWell(
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
              child: Container(
                width: width - width * 0.16,
                child: FormBuilder(
                  key: formKey,
                  child: StaggeredGridView.count(
                    staggeredTiles: [
                      ...forms.map((_) => StaggeredTile.fit(1)).toList(),
                      StaggeredTile.fit(1),
                    ],
                    crossAxisCount: 3,
                    children: [
                      ...forms,
                      ElevatedButton(
                        onPressed: () {
                          FocusScope.of(context).unfocus();
                        },
                        child: AutoSizeText(
                          'SUBMIT',
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
