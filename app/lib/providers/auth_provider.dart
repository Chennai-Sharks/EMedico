import 'dart:convert';

import 'package:app/models/auth_model.dart';
import 'package:app/providers/util_provider.dart';
import 'package:app/utils/utils.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'package:velocity_x/velocity_x.dart' show VxToast, VxToastPosition;

class AuthProvider with ChangeNotifier {
  String? _userToken = null;

  final String localHostLoginUrl = 'http://localhost:3000/api/users/login';

  //  This is used for Mobile connection.
  final String ipAddressLoginUrl = 'http://192.168.0.104:3000/api/users/login';

  final String localHostSignUpUrl = 'http://localhost:3000/api/users/register';

  //  This is used for Mobile connection.
  final String ipAddressSignUpUrl = 'http://192.168.0.104:3000/api/users/register';

  bool get isAuth => _userToken != null;
  String? get getToken => _userToken;

  Future<void> signIn(AuthSignInModel loginData, BuildContext context) async {
    final closeLoading = VxToast.showLoading(
      context,
      msg: 'Signing In...',
      textColor: Colors.white,
    );

    try {
      final String url = kIsWeb ? localHostLoginUrl : ipAddressLoginUrl;
      final response = await http.post(
        Uri.parse(url),
        body: json.encode({
          "email": loginData.email,
          "password": loginData.password,
        }),
        headers: Utility.headerValue,
      );
      if (response.statusCode >= 400) {
        VxToast.show(
          context,
          msg: response.body,
          position: VxToastPosition.bottom,
        );
        closeLoading();
        notifyListeners();
        return;
      }

      final data = json.decode(response.body) as Map<String, dynamic>;

      await UtilityProvider.setDocId(docId: data['_id']);

      // for now it is _id, change to jwt after implementation
      await UtilityProvider.setJwtToken(token: data['_id']);
      _userToken = await UtilityProvider.getJwtToken();

      closeLoading();
      notifyListeners();
    } catch (error) {
      closeLoading();
      VxToast.show(
        context,
        msg: error.toString(),
        position: VxToastPosition.bottom,
      );
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
      final String url = kIsWeb ? localHostSignUpUrl : ipAddressSignUpUrl;
      final response = await http.post(
        Uri.parse(url),
        body: json.encode({
          "name": userData.name,
          "email": userData.email,
          "password": userData.password,
        }),
        headers: Utility.headerValue,
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
      VxToast.show(
        context,
        msg: error.toString(),
        position: VxToastPosition.bottom,
      );
      print(error);
      return 'error';
    }
  }
}
