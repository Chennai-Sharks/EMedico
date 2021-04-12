class AuthSignInModel {
  final String email;
  final String password;
  AuthSignInModel({
    required this.email,
    required this.password,
  });
}

class AuthSignUpModel {
  final String name;
  final String email;
  final String password;
  AuthSignUpModel({
    required this.email,
    required this.name,
    required this.password,
  });
}
