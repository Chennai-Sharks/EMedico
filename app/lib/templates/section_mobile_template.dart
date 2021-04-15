import 'package:app/widgets/custom_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:app/widgets/nav_drawer_mobile.dart';
import 'package:auto_size_text/auto_size_text.dart';

class SectionMobileTemplate extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      drawer: CustomDrawer(),
      body: Scrollbar(
        interactive: true,
        isAlwaysShown: true,
        child: SingleChildScrollView(
          child:

              /// [Add the Form here with submit inside of it.]
              Column(
            children: [
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
    );
  }
}
