import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DataTable, Button, Divider } from 'react-native-paper';
import CustomCard from '../../../widgets/CustomCard/CustomCard';

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
  marginBottom: {
    marginBottom: 25,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
  },
  centerStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface RecentPatientsProps {
  recentPatients: Array<Record<string, any>>;
  navigator: any;
}

const RecentPatients: React.FC<RecentPatientsProps> = (props) => {
  return (
    <CustomCard styles={styles.root}>
      <Text style={styles.title}>Recently added patients</Text>
      <Divider style={{ marginTop: 15 }} />

      {props.recentPatients.length !== 0 ? (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.centerStyle}>Name</DataTable.Title>
            <DataTable.Title style={styles.centerStyle}>DPID</DataTable.Title>
            <DataTable.Title style={styles.centerStyle}>
              Actions
            </DataTable.Title>
          </DataTable.Header>

          {props.recentPatients
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
                      props.navigator.navigate('Root', {
                        screen: 'Mucormycosis - Patient Detials',
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
        </DataTable>
      ) : (
        <View style={styles.root}>
          <Divider style={styles.marginBottom} />
          <Text style={styles.textStyle}>
            There are no recently added patients.
          </Text>
        </View>
      )}
    </CustomCard>
  );
};
export default RecentPatients;
