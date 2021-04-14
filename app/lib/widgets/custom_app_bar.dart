import 'package:flutter/material.dart';

/// [Functionality need to be added.]

class CustomAppBar extends StatelessWidget with PreferredSizeWidget {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      elevation: 8,
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight + 20);
}
