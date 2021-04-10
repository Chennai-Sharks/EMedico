import 'package:app/screens/auth_screen.dart';
import 'package:app/screens/home_screen.dart';
import 'package:flutter/material.dart';

// import 'package:url_strategy/url_strategy.dart';

void main() {
  // setPathUrlStrategy();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final Map<int, Color> color = {
    50: Color.fromRGBO(136, 14, 79, .1),
    100: Color.fromRGBO(136, 14, 79, .2),
    200: Color.fromRGBO(136, 14, 79, .3),
    300: Color.fromRGBO(136, 14, 79, .4),
    400: Color.fromRGBO(136, 14, 79, .5),
    500: Color.fromRGBO(136, 14, 79, .6),
    600: Color.fromRGBO(136, 14, 79, .7),
    700: Color.fromRGBO(136, 14, 79, .8),
    800: Color.fromRGBO(136, 14, 79, .9),
    900: Color.fromRGBO(136, 14, 79, 1),
  };

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EMedico',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: MaterialColor(0xFF6C63FF, color),
      ),
      home: AuthScreen(),
    );
  }
}
