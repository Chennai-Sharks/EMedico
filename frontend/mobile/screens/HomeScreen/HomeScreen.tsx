import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { GetDashboardData } from '@emedico/shared';
import LinearProgress from '../../widgets/LinearProgressBar/LinearProgressBar';
import { LogBox, View } from 'react-native';
import CardTile from './components/CardTile';
import RecentPatients from './components/RecentPatients';
import AllPatients from './components/AllPatients';

import { FAB } from 'react-native-paper';
import TopSection from './components/TopSection';

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
});

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  }, []);

  const { data, isLoading, isError, error } = GetDashboardData();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <>
        <Text>
          {error?.response?.data?.message ?? 'Server Error Please Contact Us'}
        </Text>
      </>
    );
  }

  const dashboardTiles = {
    ...data?.data.dash,
  };

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
        <RecentPatients recentPatients={data?.data.recent} />
        <AllPatients />
      </ScrollView>
      <FAB
        style={styles.fab}
        icon={'plus'}
        onPress={() => console.log('Pressed')}
      />
    </>
  );
};
export default HomeScreen;
