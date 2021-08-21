import React from 'react';
import { StyleSheet } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BFSectionGet from '../screens/BlackFungus/BFSectionGet';
import BFAllPatients from '../screens/BlackFungus/BFAllPatients';
import BFSectionCreate from '../screens/BlackFungus/BFSectionCreate';

import LogoutButton from '../widgets/LogoutButton/LogoutButton';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

interface DrawerNavigationProps {}

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: 'Dashboard',
          headerRight: () => <LogoutButton />,
          drawerLabel: 'Dashboard',
          drawerLabelStyle: styles.title,
        }}
      />
      <Drawer.Screen
        name='Mucormycosis - Add Patient'
        component={BFSectionCreate}
        options={{
          headerTitle: 'BF - Add Patient',
          headerRight: () => <LogoutButton />,
          drawerLabel: 'Mucormycosis - Add Patient',
        }}
      />
      <Drawer.Screen
        name='Mucormycosis - All Patients'
        component={BFAllPatients}
        options={{
          headerTitle: 'BF - All Patients',
          headerRight: () => <LogoutButton />,
          drawerLabel: 'Mucormycosis - All Patients',
        }}
      />
      {
        /* <Drawer.Screen
        name='Mucormycosis - Patient Detials'
        component={BFSectionGet}
        options={{
          headerTitle: 'BF - Patient Detials',
          headerRight: () => <LogoutButton />,
          drawerLabel: 'Mucormycosis - Patient Detials',
        }}
      /> */
        // this will be added in future once search is implemented.
        // For Version 1 this feature is disabled.
      }
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
