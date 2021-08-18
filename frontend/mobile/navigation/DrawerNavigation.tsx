import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BFSectionCreate from '../screens/BlackFungus/BFSectionCreate';
import BFSectionGet from '../screens/BlackFungus/BFSectionGet';
import { StyleSheet } from 'react-native';
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
          headerTitle: 'Add Patient',
          headerRight: () => <LogoutButton />,
          drawerLabel: 'Mucormycosis - Add Patient',
        }}
      />
      <Drawer.Screen
        name='Mucormycosis - Patient Detials'
        component={BFSectionGet}
        options={{
          headerTitle: 'Patient Detials',
          headerRight: () => <LogoutButton />,
          drawerLabel: 'Mucormycosis - Patient Detials',
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
