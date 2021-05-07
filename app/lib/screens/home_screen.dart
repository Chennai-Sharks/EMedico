import 'package:app/screens/section1_screen.dart';
import 'package:app/widgets/custom_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

/// [ Home Screen Yet to be done. ]
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      backgroundColor: Color(0xFFCACAE0),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(
            child: ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(MaterialPageRoute(builder: (context) => Section1Screen()));
              },
              child: Text('Create'),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Center(
            child: ElevatedButton(
              onPressed: () {
                VxToast.show(context, msg: 'Not done');
              },
              child: Text('read'),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Center(
            child: ElevatedButton(
              onPressed: () {
                VxToast.show(context, msg: 'Not done');
              },
              child: Text('update'),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Center(
            child: ElevatedButton(
              onPressed: () {
                VxToast.show(context, msg: 'Not done');
              },
              child: Text('delete'),
            ),
          ),
        ],
      ),
    );
  }
}
