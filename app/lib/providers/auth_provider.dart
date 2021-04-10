import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class AuthProvider {
  static Future<void> signIn(Map<String, String> loginData) async {
    final response =
        await http.post(Uri.parse('http://localhost:5000/api/user/login'), body: json.encode(loginData), headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    });
    print(response.body);
  }

  static Future<void> signUp(Map<String, String> userData) async {
    final response =
        await http.post(Uri.parse('http://localhost:5000/api/user/register'), body: json.encode(userData), headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    });
    print(response.body);
  }
}
