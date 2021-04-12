import 'dart:convert';

import 'package:app/models/auth_model.dart';
import 'package:app/utils/utils.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'package:velocity_x/velocity_x.dart' show VxToast, VxToastPosition;
import 'package:shared_preferences/shared_preferences.dart';

class AuthProvider with ChangeNotifier {
  // Future<String?> getToken() async {
  //   SharedPreferences pref = await SharedPreferences.getInstance();
  //   if (pref.containsKey('token')) {
  //     notifyListeners();
  //     return pref.getString('token')!;
  //   } else
  //     return null;
  // }
  String? userToken = null;

  bool get isAuth => userToken != null;

  Future<void> signIn(AuthSignInModel loginData, BuildContext context) async {
    final closeLoading = VxToast.showLoading(
      context,
      msg: 'Signing In...',
      textColor: Colors.white,
    );

    try {
      String url = kIsWeb ? 'http://localhost:3000/api/user/login' : 'http://192.168.0.103:3000/api/user/login';
      final response = await http.post(
        Uri.parse(url),
        body: json.encode({
          "email": loginData.email,
          "password": loginData.password,
        }),
        headers: Utiliy.headerValue,
      );
      if (response.statusCode >= 400) {
        VxToast.show(
          context,
          msg: response.body,
          position: VxToastPosition.bottom,
        );
        closeLoading();
        notifyListeners();
      }
      // print(response.body);
      SharedPreferences pref = await SharedPreferences.getInstance();
      pref.setString('token', response.body);
      userToken = pref.getString('token');
      print(userToken);
      print(isAuth);
      closeLoading();
      notifyListeners();
    } catch (error) {
      closeLoading();
      print(error);
      notifyListeners();
    }
  }

  Future<String> signUp(AuthSignUpModel userData, BuildContext context) async {
    final closeLoading = VxToast.showLoading(
      context,
      msg: 'Signing Up...',
      textColor: Colors.white,
    );
    try {
      String url = kIsWeb ? 'http://localhost:3000/api/user/register' : 'http://192.168.0.103:3000/api/user/register';
      print("${userData.email},${userData.name}, ${userData.password},");
      final response = await http.post(
        Uri.parse(url),
        body: json.encode({
          "name": userData.name,
          "email": userData.email,
          "password": userData.password,
        }),
        headers: Utiliy.headerValue,
      );
      if (response.statusCode >= 400) {
        VxToast.show(
          context,
          msg: response.body,
          position: VxToastPosition.bottom,
        );
        closeLoading();
        return 'error';
      }
      print(response.body);
      closeLoading();
      return 'done';
    } catch (error) {
      closeLoading();
      print(error);
      return 'error';
    }
  }
}
