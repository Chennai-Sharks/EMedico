import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:url_strategy/url_strategy.dart';

import 'package:app/providers/auth_provider.dart';
import 'package:app/screens/auth_screen.dart';
import 'package:app/screens/home_screen.dart';

/// [ Remove all the print and log statements before production. ]

/// [ After production if time is there, go to section folder and use map function to these]
///  [ paddding widgets with textfields to simplify the code a lot. ]

void main() {
  setPathUrlStrategy();
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
    return ChangeNotifierProvider(
      create: (_) => AuthProvider(),
      builder: (context, _) {
        return Consumer<AuthProvider>(
          builder: (context, auth, _) {
            print(auth.isAuth);
            return MaterialApp(
              title: 'EMedico',
              debugShowCheckedModeBanner: false,
              theme: ThemeData(
                primarySwatch: MaterialColor(0xFF6C63FF, color),
                primaryColor: MaterialColor(0xFF6C63FF, color),
                backgroundColor: MaterialColor(0xFF6C63FF, color),
              ),
              home: auth.isAuth ? HomeScreen() : AuthScreen(),
              // home: Section1Screen(),
            );
          },
        );
      },
    );
  }
}
