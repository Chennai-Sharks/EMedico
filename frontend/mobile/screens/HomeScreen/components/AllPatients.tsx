import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { GetBFAllPatients } from '@emedico/shared';
import { DataTable, Button, Divider } from 'react-native-paper';

import CustomCard from '../../../widgets/CustomCard/CustomCard';
import LinearProgressBar from '../../../widgets/LinearProgressBar/LinearProgressBar';
import { useFocusEffect } from '@react-navigation/native';

const styles = StyleSheet.create({
  root: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: 300,
  },
  errorTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  errorContainer: {
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface AllPatientsProps {
  navigator: any;
  fromBFAllPatients?: boolean;
}

const AllPatients: React.FC<AllPatientsProps> = ({
  navigator,
  fromBFAllPatients,
}: any) => {
  const { data, isLoading, isError, error, refetch } = GetBFAllPatients();

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <CustomCard styles={styles.root}>
      <Text style={styles.title}>All Patients</Text>

      <Divider style={{ marginTop: 15 }} />

      {isLoading ? (
        <LinearProgressBar />
      ) : isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTextStyle}>
            {error?.response?.data ? error?.response?.data?.message : 'No Data'}
          </Text>
        </View>
      ) : (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.centerStyle}>Name</DataTable.Title>
            <DataTable.Title style={styles.centerStyle}>DPID</DataTable.Title>
            <DataTable.Title style={styles.centerStyle}>
              Actions
            </DataTable.Title>
          </DataTable.Header>
          <View style={fromBFAllPatients ? [] : styles.container}>
            <ScrollView nestedScrollEnabled={true}>
              {(data?.data as Array<Record<string, any>>)
                .map((patient, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={styles.centerStyle}>
                      <Text style={{ fontWeight: 'bold' }}>{patient.name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.centerStyle}>
                      {patient.dpid}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.centerStyle}>
                      <Button
                        onPress={() => {
                          navigator.navigate('BF-PatientDetails', {
                            params: {
                              patientId: patient._id,
                            },
                          });
                        }}
                      >
                        View
                      </Button>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))
                .reverse()}
            </ScrollView>
          </View>
        </DataTable>
      )}
    </CustomCard>
  );
};
export default AllPatients;
