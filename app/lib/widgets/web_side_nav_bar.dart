import 'package:app/screens/home_screen.dart';
import 'package:app/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// [ Navigation to be added. ]

class WebSideNavBar extends StatefulWidget {
  final bool isTablet;
  WebSideNavBar({
    required this.isTablet,
  });

  @override
  _WebSideNavBarState createState() => _WebSideNavBarState();
}

class _WebSideNavBarState extends State<WebSideNavBar> {
  int selectedIndex = 0;

  @override
  void setState(VoidCallback fn) {
    if (mounted) super.setState(fn);
    return;
  }

  @override
  Widget build(BuildContext context) {
    return NavigationRail(
      selectedIndex: selectedIndex,
      onDestinationSelected: (value) {
        setState(() {
          selectedIndex = value;
        });
        Navigator.of(context).push(MaterialPageRoute(
          builder: (context) => HomeScreen(),
        ));
      },
      elevation: 8,
      extended: widget.isTablet ? false : true,
      minExtendedWidth: widget.isTablet ? null : MediaQuery.of(context).size.width * 0.16,
      backgroundColor: Utiliy.primaryColor,
      labelType: widget.isTablet ? NavigationRailLabelType.all : null,
      destinations: [
        NavigationRailDestination(
          icon: Icon(
            Icons.home,
            color: Colors.white,
          ),
          label: Text(
            'DashBoard',
            style: GoogleFonts.poppins(
              fontSize: 18,
              color: Colors.white,
            ),
          ),
        ),
        for (int i = 1; i <= 6; i++)
          NavigationRailDestination(
            icon: Icon(
              Icons.article,
              color: Colors.white,
            ),
            label: Text(
              'Section $i',
              style: GoogleFonts.poppins(
                fontSize: 18,
                color: Colors.white,
              ),
            ),
          ),
      ],
    );
  }
}
