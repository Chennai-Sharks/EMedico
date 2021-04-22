import 'package:shared_preferences/shared_preferences.dart';

class UtilityProvider {
  static Future<String?> getDocId() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    if (pref.containsKey('docId')) {
      return pref.getString('docId')!;
    } else
      return null;
  }

  static Future<void> setDocId({required String docId}) async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    pref.setString('docId', docId);
  }

  static Future<void> setJwtToken({required String token}) async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    pref.setString('token', token);
  }

  static Future<String?> getJwtToken() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    if (pref.containsKey('token')) {
      return pref.getString('token')!;
    } else
      return null;
  }

  // This is used for adding patient details in each section.
  static Future<void> setCurrentPatientId({required String pId}) async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    pref.setString('pId', pId);
  }

  static Future<String?> getCurrentPatientId() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    if (pref.containsKey('pId')) {
      return pref.getString('pId')!;
    } else
      return null;
  }
}
