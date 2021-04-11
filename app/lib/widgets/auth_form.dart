import 'package:flutter/material.dart';

import 'package:auto_size_text/auto_size_text.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:app/utils/utils.dart';
import 'package:app/providers/auth_provider.dart';

/// [this is both used for mobile and web so make it responsive!!!! ]

class AuthForms extends StatefulWidget {
  @override
  _AuthFormsState createState() => _AuthFormsState();
}

class _AuthFormsState extends State<AuthForms> {
  final _formKey = GlobalKey<FormState>();

  InputDecoration? customizeTextField({String? label, Widget? icon}) {
    return InputDecoration(
      icon: icon,
      labelText: label,
      labelStyle: GoogleFonts.poppins(),
      floatingLabelBehavior: FloatingLabelBehavior.never,
      filled: true,
      fillColor: Utiliy.fullgreyBackground,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(20),
      ),
    );
  }

  Widget textFeildWrapper({Widget? widget}) {
    return Container(
      margin: const EdgeInsets.only(
        // left: 40,
        right: 50, // 70 if fully opened, 40 if its a tablet.
        bottom: 20,
      ),
      alignment: Alignment.center,
      child: widget,
    );
  }

  @override
  void initState() {
    super.initState();

    // myFocusNode = FocusNode();
  }

  @override
  void dispose() {
    // Clean up the focus node when the Form is disposed.
    // myFocusNode.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          flex: 1,
          child: Container(
            alignment: Alignment.center,
            child: AutoSizeText(
              'Login',
              style: GoogleFonts.poppins(
                fontSize: 35,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
              maxLines: 1,
            ),
          ),
        ),
        Expanded(
          flex: 2,
          child: Form(
            key: _formKey,
            autovalidateMode: AutovalidateMode.always,
            child: Column(
              children: [
                textFeildWrapper(
                  widget: TextFormField(
                    style: GoogleFonts.poppins(),
                    validator: (value) {
                      if (value != null && value.isEmpty) return 'Value is empty';
                      return null;
                    },
                    decoration: customizeTextField(
                      icon: Icon(
                        Icons.person,
                      ),
                      label: '  Name',
                    ),
                  ),
                ),
                textFeildWrapper(
                  widget: TextFormField(
                    style: GoogleFonts.poppins(),
                    decoration: customizeTextField(
                      icon: Icon(Icons.email),
                      label: '  Email',
                    ),
                  ),
                ),
                textFeildWrapper(
                  widget: TextFormField(
                    style: GoogleFonts.poppins(),
                    onChanged: (_) {
                      _formKey.currentState!.validate();
                    },
                    decoration: customizeTextField(
                      icon: Icon(Icons.lock),
                      label: '  Password',
                    ),
                  ),
                ),
                Container(
                  width: MediaQuery.of(context).size.width * 0.15,
                  height: 45,
                  // alignment: Alignment.center,
                  margin: EdgeInsets.only(
                    right: 20,
                    top: 20,
                  ),
                  child: ElevatedButton(
                    onPressed: () async {
                      if (_formKey.currentState!.validate()) {
                        // _formKey.currentState!.
                        await AuthProvider.signUp({
                          "name": "poujhit",
                          "email": "email@email.com",
                          "password": "thisisunique",
                        });
                      }
                    },
                    style: ElevatedButton.styleFrom(
                        elevation: 10,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(15),
                        )),
                    child: Text('Submit'),
                  ),
                ),
              ],
            ),
          ),
        )
      ],
    );
  }
}
