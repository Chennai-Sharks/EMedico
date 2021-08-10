import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native';
import { credentialStore, GetDashboardData } from '@emedico/shared';
import LinearProgress from '../../widgets/LinearProgressBar/LinearProgressBar';
import { LogBox } from 'react-native';
import CardTile from './components/CardTile';
interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const cred = credentialStore((state) => state);

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
          {error?.response?.data.message ?? 'Server Error Please Contact Us'}
        </Text>
        <Button
          title='logout'
          onPress={() => {
            console.log('hello');
            cred.deleteEverything();
          }}
        />
      </>
    );
  }

  const dashboardTiles = {
    ...data?.data.dash,
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#ECF0FD',
      }}
    >
      <Text>Home screen</Text>
      <Button
        title='logout'
        onPress={() => {
          console.log('hello');
          cred.deleteEverything();
        }}
      />

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
      <CardTile
        title={'Region of complaints:'}
        values={[
          `Eye: ${dashboardTiles.complaints.e}`,
          `Face: ${dashboardTiles.complaints.f}`,
          `Mouth: ${dashboardTiles.complaints.m}`,
          `Nose: ${dashboardTiles.complaints.n}`,
        ]}
      />
    </ScrollView>
  );
};
export default HomeScreen;
