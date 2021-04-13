/// [this needs to be checked]

class Section1Model {
  final String name;
  final int age;
  final List<String> gender;
  final String treatingDentist;
  final List<String> purposeOfVisit;
  final String referralSource;
  final List<String> personalHistory;
  final String occupation;
  final String allergiesToMedication;
  final List<String> chiefComplaints;
  final List<String> additionalConcerns;
  final List<HistoryofPresentingIllness> historyOfPresentingIllness;
  final String primaryCarePhysician;
  final String primaryDentist;
  final String anyOtherPhyscian;
  final String additionalNotes;

  Section1Model({
    required this.name,
    required this.age,
    required this.gender,
    required this.treatingDentist,
    required this.purposeOfVisit,
    required this.referralSource,
    required this.personalHistory,
    required this.occupation,
    required this.allergiesToMedication,
    required this.historyOfPresentingIllness,
    required this.chiefComplaints,
    required this.additionalConcerns,
    required this.primaryCarePhysician,
    required this.primaryDentist,
    required this.anyOtherPhyscian,
    required this.additionalNotes,
  });

  factory Section1Model.fromJson(Map<String, dynamic> json) => Section1Model(
        name: json["name"],
        age: json["age"],
        gender: List<String>.from(json["gender"].map((x) => x)),
        treatingDentist: json["treatingDentist"],
        purposeOfVisit: List<String>.from(json["purposeOfVisit"].map((x) => x)),
        referralSource: json["referralSource"],
        personalHistory: List<String>.from(json["personalHistory"].map((x) => x)),
        occupation: json["occupation"],
        allergiesToMedication: json["allergiesToMedication"],
        chiefComplaints: List<String>.from(json["chiefComplaints"].map((x) => x)),
        additionalConcerns: List<String>.from(json["additionalConcerns"].map((x) => x)),
        historyOfPresentingIllness:
            List<HistoryofPresentingIllness>.from(json["historyOfPresentingIllness"].map((x) => x)),
        primaryCarePhysician: json["primaryCarePhysician"],
        primaryDentist: json["primaryDentist"],
        anyOtherPhyscian: json["anyOtherPhyscian"],
        additionalNotes: json["additionalNotes"],
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "age": age,
        "gender": List<dynamic>.from(gender.map((x) => x)),
        "treatingDentist": treatingDentist,
        "purposeOfVisit": List<dynamic>.from(purposeOfVisit.map((x) => x)),
        "referralSource": referralSource,
        "personalHistory": List<dynamic>.from(personalHistory.map((x) => x)),
        "occupation": occupation,
        "allergiesToMedication": allergiesToMedication,
        "chiefComplaints": List<dynamic>.from(chiefComplaints.map((x) => x)),
        "additionalConcerns": List<dynamic>.from(additionalConcerns.map((x) => x)),
        "historyOfPresentingIllness": List<dynamic>.from(historyOfPresentingIllness.map((x) => x)),
        "primaryCarePhysician": primaryCarePhysician,
        "primaryDentist": primaryDentist,
        "anyOtherPhyscian": anyOtherPhyscian,
        "additionalNotes": additionalNotes,
      };
}

class HistoryofPresentingIllness {
  HistoryofPresentingIllness({
    required this.onset,
    required this.location,
    required this.chronicity,
    required this.frequence,
    required this.duration,
    required this.intensity,
    required this.backgroundPain,
    required this.quality,
    required this.treatments,
    required this.aggrevatingFactors,
    required this.relievingFactors,
    required this.temporalChar,
    required this.associatedFeatures,
    required this.referralPattern,
    required this.sleep,
  });

  final String onset;
  final String location;
  final String chronicity;
  final String frequence;
  final String duration;
  final List<int> intensity;
  final List<int> backgroundPain;
  final String quality;
  final String treatments;
  final String aggrevatingFactors;
  final String relievingFactors;
  final String temporalChar;
  final String associatedFeatures;
  final String referralPattern;
  final String sleep;

  factory HistoryofPresentingIllness.fromJson(Map<String, dynamic> json) => HistoryofPresentingIllness(
        onset: json["onset"],
        location: json["location"],
        chronicity: json["chronicity"],
        frequence: json["frequence"],
        duration: json["duration"],
        intensity: List<int>.from(json["intensity"].map((x) => x)),
        backgroundPain: List<int>.from(json["backgroundPain"].map((x) => x)),
        quality: json["quality"],
        treatments: json["treatments"],
        aggrevatingFactors: json["aggrevatingFactors"],
        relievingFactors: json["RelievingFactors"],
        temporalChar: json["temporalChar"],
        associatedFeatures: json["associatedFeatures"],
        referralPattern: json["referralPattern"],
        sleep: json["sleep"],
      );

  Map<String, dynamic> toJson() => {
        "onset": onset,
        "location": location,
        "chronicity": chronicity,
        "frequence": frequence,
        "duration": duration,
        "intensity": List<dynamic>.from(intensity.map((x) => x)),
        "backgroundPain": List<dynamic>.from(backgroundPain.map((x) => x)),
        "quality": quality,
        "treatments": treatments,
        "aggrevatingFactors": aggrevatingFactors,
        "RelievingFactors": relievingFactors,
        "temporalChar": temporalChar,
        "associatedFeatures": associatedFeatures,
        "referralPattern": referralPattern,
        "sleep": sleep,
      };
}
