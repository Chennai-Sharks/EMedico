import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import LinearProgress from '../../widgets/LinearProgressBar/LinearProgressBar';

// In this itself all the get components are here.
// This is to make bundling faster.
// But all the sections will be in seperate components.

import { toHeaderCase } from 'js-convert-case';
import { GetBFSection1Data, section1FormModel } from '@emedico/shared';
import { GetBFSection2Data, section2FormModel } from '@emedico/shared';
import { GetBFSection3Data, section3FormModel } from '@emedico/shared';
import { GetBFSection4Data, section4FormModel } from '@emedico/shared';

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

interface BFSectionGetProps {}

const BFSectionGet: React.FC<BFSectionGetProps> = ({
  route,
  navigation,
}: any) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ECF0FD',
      }}
    >
      <Text>{route.params.patientId}</Text>
      <BFSection1Get patientId={route.params.patientId} />
      <BFSection2Get patientId={route.params.patientId} />

      <BFSection3Get patientId={route.params.patientId} />

      <BFSection4Get patientId={route.params.patientId} />
    </ScrollView>
  );
};

interface BFSection1GetProps {
  patientId: string;
}

const BFSection1Get: React.FC<BFSection1GetProps> = ({ patientId }) => {
  const { data, isLoading, isError, error } = GetBFSection1Data(patientId);

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

  return (
    <ScrollView>
      <Text>Section1</Text>
    </ScrollView>
  );
};

interface BFSection2GetProps {
  patientId: string;
}

const BFSection2Get: React.FC<BFSection2GetProps> = ({ patientId }) => {
  const { data, isLoading, isError, error } = GetBFSection2Data(patientId);

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

  return (
    <ScrollView>
      <Text>Section2</Text>
    </ScrollView>
  );
};

interface BFSection3GetProps {
  patientId: string;
}

const BFSection3Get: React.FC<BFSection3GetProps> = ({ patientId }) => {
  const { data, isLoading, isError, error } = GetBFSection3Data(patientId);

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

  return (
    <ScrollView>
      <Text>Section3</Text>
    </ScrollView>
  );
};

interface BFSection4GetProps {
  patientId: string;
}

const BFSection4Get: React.FC<BFSection4GetProps> = ({ patientId }) => {
  const { data, isLoading, isError, error } = GetBFSection4Data(patientId);

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

  return (
    <ScrollView>
      <Text>Section4</Text>
    </ScrollView>
  );
};

export default BFSectionGet;
