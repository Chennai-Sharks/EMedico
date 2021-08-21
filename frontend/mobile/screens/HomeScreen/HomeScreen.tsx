import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  LogBox,
  View,
  Image,
} from 'react-native';
import { FAB } from 'react-native-paper';
import { GetDashboardData } from '@emedico/shared';
import { useFocusEffect } from '@react-navigation/native';

import CardTile from './components/CardTile';
import AllPatients from './components/AllPatients';
import TopSection from './components/TopSection';
import RecentPatients from './components/RecentPatients';

import LinearProgress from '../../widgets/LinearProgressBar/LinearProgressBar';

const styles = StyleSheet.create({
  tileContainer: { display: 'flex', flexDirection: 'row' },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  errorContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 40,
    textAlign: 'center',
  },
  errorImage: {
    height: 200,
    width: 300,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
});

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }: any) => {
  const { data, isLoading, isError, error, refetch } = GetDashboardData();

  const [visible, setVisible] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setVisible(true);
      LogBox.ignoreLogs(['Setting a timer for a long period of time']);
      refetch();
      return () => {
        setVisible(false);
      };
    }, [])
  );

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Image
          source={require('../../assets/error.png')}
          style={styles.errorImage}
        />
        <Text style={styles.errorText}>
          {error?.response?.data?.message ?? 'Server Error Please Contact Us'}
        </Text>
      </View>
    );
  }

  const dashboardTiles = data?.data.dash;

  return (
    <>
      <ScrollView
        nestedScrollEnabled={true}
        style={{
          backgroundColor: '#ECF0FD',
        }}
      >
        <TopSection />

        <View style={styles.tileContainer}>
          <CardTile
            title={'No of total Patients:'}
            values={[data?.data.noOfPatients]}
          />
          <CardTile
            title={'Diabetes:'}
            values={[
              `With: ${dashboardTiles.diabetes.y}`,
              `Without: ${dashboardTiles.diabetes.n}`,
            ]}
          />
        </View>

        <View style={styles.tileContainer}>
          <CardTile
            title={'Covid:'}
            values={[
              `With: ${dashboardTiles.covid.y}`,
              `Without: ${dashboardTiles.covid.n}`,
            ]}
          />
          <CardTile
            title={'Hospitalized:'}
            values={[
              `Yes: ${dashboardTiles.hospitalized.y}`,
              `No: ${dashboardTiles.hospitalized.n}`,
            ]}
          />
        </View>

        <View style={styles.tileContainer}>
          <CardTile
            title={'Immuno compromised? '}
            values={[
              `Yes: ${dashboardTiles.immuno_comp.y}`,
              `No: ${dashboardTiles.immuno_comp.n}`,
            ]}
          />
          <CardTile
            title={'In steriods?'}
            values={[
              `Yes: ${dashboardTiles.steriods.y}`,
              `No: ${dashboardTiles.steriods.n}`,
            ]}
          />
        </View>

        <CardTile
          title={'Region of complaints:'}
          values={[
            `Eye: ${dashboardTiles.complaints.e}`,
            `Face: ${dashboardTiles.complaints.f}`,
            `Mouth: ${dashboardTiles.complaints.m}`,
            `Nose: ${dashboardTiles.complaints.n}`,
          ]}
        />
        <RecentPatients
          navigator={navigation}
          recentPatients={data?.data.recent}
        />
        <AllPatients navigator={navigation} />
      </ScrollView>
      <FAB
        style={styles.fab}
        icon={'plus'}
        visible={visible}
        onPress={() => {
          navigation.navigate('Root', { screen: 'Mucormycosis - Add Patient' });
        }}
      />
    </>
  );
};
export default HomeScreen;
