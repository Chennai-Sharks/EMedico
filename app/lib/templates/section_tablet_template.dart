import 'package:app/widgets/custom_app_bar.dart';
import 'package:app/widgets/web_side_nav_bar.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';

class SectionTabletTemplate extends StatelessWidget {
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
          Scrollbar(
            interactive: true,
            isAlwaysShown: true,
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Container(
                    width: width - 72 - 44,
                    child:

                        /// [ Replace this example row widget with the actual form builder with row inbuilt like this. ]

                        Row(
                      /// [Only two rows in tablet.]
                      children: [
                        Expanded(
                          flex: 1,
                          child: Container(child: Text('d'), color: Colors.red),
                        ),
                        Expanded(
                          flex: 1,
                          child: Container(child: Text('d'), color: Colors.green),
                        ),
                      ],
                    ),
                  ),
                  ElevatedButton(
                    onPressed: () {},
                    child: AutoSizeText(
                      'SUBMIT',
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
