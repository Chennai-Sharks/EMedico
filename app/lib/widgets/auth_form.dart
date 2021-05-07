import 'package:app/models/auth_model.dart';
import 'package:app/widgets/custom_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/rendering.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:app/utils/utils.dart';
import 'package:app/providers/auth_provider.dart';
import 'package:provider/provider.dart';

/// [this is both used for mobile and web so make it responsive!!!! ]
/// [it is responsive now. but later changes can be made. As of now okay]

class AuthForms extends StatefulWidget {
  final bool isMobile;
  final bool isTablet;
  AuthForms({required this.isMobile, required this.isTablet});
  @override
  _AuthFormsState createState() => _AuthFormsState();
}

class _AuthFormsState extends State<AuthForms> {
  final _formKey = GlobalKey<FormState>();
  late FocusNode nameFocus, emailFocus, passwordFocus;
  var userSignIn = AuthSignInModel(email: '', password: '');
  var userSignUp = AuthSignUpModel(email: '', name: '', password: '');
  bool isSignIn = true;

  InputDecoration? customizeTextField({String? label, Widget? icon}) {
    return InputDecoration(
      icon: icon,
      labelText: label,
      labelStyle: GoogleFonts.rubik(),
      floatingLabelBehavior: FloatingLabelBehavior.never,
      filled: true,
      fillColor: Utility.fullgreyBackground,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(20),
      ),
    );
  }

  Widget SignInorUpText() {
    return Container(
      alignment: Alignment.center,
      margin: widget.isMobile
          ? const EdgeInsets.only(
              top: 15,
              bottom: 10,
            )
          : null,
      child: AutoSizeText(
        isSignIn ? 'Login' : 'Sign Up',
        style: GoogleFonts.rubik(
          fontSize: widget.isMobile ? 30 : 35,
          fontWeight: FontWeight.bold,
        ),
        textAlign: TextAlign.center,
        maxLines: 1,
      ),
    );
  }

  Widget textFeildWrapper({Widget? widget, required bool isMobile, required bool isTablet}) {
    return Container(
      margin: isMobile
          ? const EdgeInsets.only(
              bottom: 20,
              right: 25,
              left: 15,
            )
          : const EdgeInsets.only(
              right: 50,
              bottom: 20,
            ),
      alignment: Alignment.center,
      child: widget,
    );
  }

  void unFocusFields() {
    emailFocus.unfocus();
    nameFocus.unfocus();
    passwordFocus.unfocus();
  }

  @override
  Widget build(BuildContext context) {
    return InkWell(
      enableFeedback: false,
      mouseCursor: MouseCursor.defer,
      focusColor: Colors.white,
      splashColor: Colors.white,
      hoverColor: Colors.white,
      highlightColor: Colors.white,
      onTap: unFocusFields,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          widget.isMobile
              ? SignInorUpText()
              : Expanded(
                  child: SignInorUpText(),
                ),
          Expanded(
            flex: widget.isMobile
                ? 1
                : isSignIn
                    ? 2
                    : 3,
            child: Container(
              child: Form(
                key: _formKey,
                child: Column(
                  mainAxisAlignment: widget.isMobile ? MainAxisAlignment.center : MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    isSignIn
                        ? Container()
                        : Container(
                            child: textFeildWrapper(
                              isMobile: widget.isMobile,
                              isTablet: widget.isTablet,
                              widget: TextFormField(
                                style: GoogleFonts.rubik(),
                                keyboardType: TextInputType.name,
                                focusNode: nameFocus,
                                validator: (value) {
                                  if (value != null && value.isEmpty) return 'Name should not be empty';
                                  if (value != null && value.isNotEmpty && value.length <= 3)
                                    return 'Name should be more that 3 characters';
                                  return null;
                                },
                                decoration: customizeTextField(
                                  icon: Icon(
                                    Icons.person,
                                  ),
                                  label: '  Name',
                                ),
                                onChanged: (value) {
                                  if (value.length > 5) _formKey.currentState!.validate();
                                },
                                onSaved: (name) {
                                  if (!isSignIn) {
                                    userSignUp = AuthSignUpModel(
                                      email: userSignUp.email,
                                      name: name!,
                                      password: userSignUp.password,
                                    );
                                  } else
                                    return;
                                },
                              ),
                            ),
                          ),
                    Container(
                      child: textFeildWrapper(
                        isMobile: widget.isMobile,
                        isTablet: widget.isTablet,
                        widget: TextFormField(
                            style: GoogleFonts.rubik(),
                            focusNode: emailFocus,
                            keyboardType: TextInputType.emailAddress,
                            decoration: customizeTextField(
                              icon: Icon(Icons.email),
                              label: '  Email',
                            ),
                            validator: (email) {
                              if (email != null) {
                                bool isvalidEmail =
                                    RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                                        .hasMatch(email);
                                if (!isvalidEmail) return 'Email is not Valid';
                                return null;
                              }
                              return null;
                            },
                            onChanged: (value) {
                              if (value.length > 5) _formKey.currentState!.validate();
                            },
                            onSaved: (email) {
                              if (isSignIn) {
                                userSignIn = AuthSignInModel(email: email!, password: userSignIn.password);
                              } else {
                                userSignUp = AuthSignUpModel(
                                  email: email!,
                                  name: userSignUp.name,
                                  password: userSignUp.password,
                                );
                              }
                            }),
                      ),
                    ),
                    Container(
                      child: textFeildWrapper(
                        isMobile: widget.isMobile,
                        isTablet: widget.isTablet,
                        widget: TextFormField(
                          style: GoogleFonts.rubik(),
                          focusNode: passwordFocus,
                          obscureText: true,
                          keyboardType: TextInputType.text,
                          decoration: customizeTextField(
                            icon: Icon(Icons.lock),
                            label: '  Password',
                          ),
                          validator: (password) {
                            if (password != null) {
                              if (password.length <= 8) return 'Password should be greater than 8 characters';
                              return null;
                            }
                            return null;
                          },
                          onChanged: (value) {
                            if (value.length > 5) _formKey.currentState!.validate();
                          },
                          onSaved: (password) {
                            if (isSignIn) {
                              userSignIn = AuthSignInModel(
                                email: userSignIn.email,
                                password: password!,
                              );
                            } else {
                              userSignUp = AuthSignUpModel(
                                email: userSignUp.email,
                                name: userSignUp.name,
                                password: password!,
                              );
                            }
                          },
                        ),
                      ),
                    ),
                    Container(
                      width: widget.isMobile
                          ? MediaQuery.of(context).size.width * 0.5
                          : MediaQuery.of(context).size.width * 0.15,
                      height: 45,
                      margin: EdgeInsets.only(
                        right: widget.isMobile ? 0 : 20,
                        top: 15,
                      ),
                      child: ElevatedButton(
                        onPressed: () async {
                          unFocusFields();
                          var signUpResult;
                          if (_formKey.currentState!.validate()) {
                            _formKey.currentState!.save();
                            if (isSignIn) {
                              await Provider.of<AuthProvider>(context, listen: false).signIn(userSignIn, context);
                            } else {
                              signUpResult =
                                  await Provider.of<AuthProvider>(context, listen: false).signUp(userSignUp, context);

                              if (signUpResult == 'done')
                                showSignUpDoneDialog();
                              else
                                return;
                            }
                          }
                          return;
                        },
                        style: ElevatedButton.styleFrom(
                          elevation: 5,
                          primary: Utility.primaryColor,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(15),
                          ),
                        ),
                        child: Text('Submit', style: GoogleFonts.rubik()),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(
                        right: widget.isMobile ? 0 : 20,
                        top: isSignIn
                            ? 20
                            : widget.isMobile
                                ? widget.isTablet
                                    ? 20
                                    : 10
                                : 30,
                      ),
                      child: TextButton(
                        onPressed: () {
                          unFocusFields();
                          setState(() {
                            isSignIn = !isSignIn;
                          });
                        },
                        child: Text(
                          isSignIn ? 'Sign Up Instead' : 'Sign In Instead',
                          style: GoogleFonts.rubik(),
                        ),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(
                        right: widget.isMobile ? 0 : 10,
                        top: widget.isMobile
                            ? widget.isTablet
                                ? 10
                                : 0
                            : 10,
                      ),
                      child: TextButton(
                        onPressed: () {
                          unFocusFields();
                        },
                        child: Text(
                          'Forgot Passoword?',
                          style: GoogleFonts.rubik(),
                        ),
                        style: TextButton.styleFrom(
                          primary: Utility.darkSecondaryColor,
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    emailFocus = FocusNode();
    nameFocus = FocusNode();
    passwordFocus = FocusNode();
  }

  @override
  void dispose() {
    nameFocus.dispose();
    passwordFocus.dispose();
    emailFocus.dispose();
    super.dispose();
  }

  void showSignUpDoneDialog() {
    CustomDialog.showCustomDialog(
      context: context,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            margin: const EdgeInsets.only(
              top: 15,
              bottom: 10,
            ),
            padding: const EdgeInsets.only(
              left: 15,
              right: 15,
              bottom: 5,
            ),
            decoration: BoxDecoration(
              border: Border(
                bottom: BorderSide(
                  width: 1,
                  color: Colors.grey,
                  style: BorderStyle.solid,
                ),
              ),
            ),
            child: AutoSizeText(
              'Sign Up done Successfully',
              style: GoogleFonts.rubik(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: AutoSizeText(
              'You can now sign In \nto access the dashboard.',
              style: GoogleFonts.rubik(
                fontSize: 16,
              ),
              textAlign: TextAlign.center,
              maxLines: 2,
            ),
          ),
          Container(
            margin: const EdgeInsets.all(15),
            child: ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
                setState(() {
                  isSignIn = !isSignIn;
                });
              },
              style: ElevatedButton.styleFrom(
                  elevation: 10,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15),
                  )),
              child: Text(
                'Okay',
              ),
            ),
          ),
        ],
      ),
    );
  }
}
