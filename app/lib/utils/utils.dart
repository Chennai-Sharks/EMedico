import 'dart:ui';

class Utility {
  static const modernWhiteBackground = Color(0xFFEAECF8);
  static const fullgreyBackground = Color(0xFFE6E6E6);
  static const primaryColor = Color(0xFF1089ff);
  static const darkSecondaryColor = Color(0xFF23374d);

//  static const kPrimaryColor = Color(0xFF366CF6);
//  static const kSecondaryColor = Color(0xFFF5F6FC);
//  static const kBgLightColor = Color(0xFFF2F4FC);
//  static const kBgDarkColor = Color(0xFFEAECF8);
//  static const kBadgeColor = Color(0xFFEE376E);
//  static const kGrayColor = Color(0xFF8793B2);
//  static const kTitleTextColor = Color(0xFF30384D);
//  static const kTextColor = Color(0xFF4D5875);

  static const headerValue = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
  };

  static List<String> historyOfPatientIllness = [
    'onset',
    'location',
    'chronicity',
    'frequence',
    'duration',
    'intensity',
    'backgroundPain',
    'quality',
    'treatments',
    'aggravatingFactors',
    'RelievingFactors',
    'temporalChar',
    'associatedFeatures',
    'referralPattern',
    'sleep',
  ];
}
