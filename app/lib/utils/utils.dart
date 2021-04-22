import 'dart:ui';

class Utility {
  static const modernWhiteBackground = Color(0xFFEFF2F7);
  static const fullgreyBackground = Color(0xFFE6E6E6);
  static const primaryColor = Color(0xFF1089ff);
  static const darkSecondaryColor = Color(0xFF23374d);

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
