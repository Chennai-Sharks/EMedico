import React from 'react';
import { ScrollView } from 'react-native';
import AllPatients from '../HomeScreen/components/AllPatients';

interface BFAllPatientsProps {}

const BFAllPatients: React.FC<BFAllPatientsProps> = ({ navigation }: any) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ECF0FD',
      }}
    >
      <AllPatients navigator={navigation} fromBFAllPatients={true} />
    </ScrollView>
  );
};
export default BFAllPatients;
