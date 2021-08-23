import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import LinearProgress from '../../widgets/LinearProgressBar/LinearProgressBar';
import CustomCard from '../../widgets/CustomCard/CustomCard';

// In this itself all the get components are here.
// This is to make bundling faster. React native bundling is so slow lol
// But all the sections will be in seperate components.

import { toHeaderCase } from 'js-convert-case';
import { GetBFSection1Data, section1FormModel } from '@emedico/shared';
import { GetBFSection2Data, section2FormModel } from '@emedico/shared';
import { GetBFSection3Data, section3FormModel } from '@emedico/shared';
import { GetBFSection4Data, section4FormModel } from '@emedico/shared';
import { Divider, List } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import BFGetFAB from './components/BFGetFAB';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  errorContainer: {
    marginTop: 20,
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
  dividerStyle: {
    height: 1.6,
    backgroundColor: '#2B292967',
  },
  bigtitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  progressbar: {
    marginTop: 10,
    marginBottom: 10,
  },
});

interface BFSectionGetProps {}

const BFSectionGet: React.FC<BFSectionGetProps> = ({ route }: any) => {
  const ref = React.useRef<ScrollView>(null);

  const [visible, setVisible] = React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setVisible(false);
      };
    }, [])
  );
  console.log(visible);

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: '#ECF0FD',
        }}
        ref={ref}
      >
        <Text style={styles.bigtitle}>Section 1</Text>

        <BFSection1Get
          patientId={route.params.patientId}
          name={route.params.name}
          dpid={route.params.dpid}
        />
        <Text style={styles.bigtitle}>Section 2</Text>

        <BFSection2Get patientId={route.params.patientId} />
        <Text style={styles.bigtitle}>Section 3</Text>

        <BFSection3Get patientId={route.params.patientId} />
        <Text style={styles.bigtitle}>Section 4</Text>

        <BFSection4Get patientId={route.params.patientId} />
      </ScrollView>
      <BFGetFAB reference={ref} visible={visible} />
    </>
  );
};

interface BFSection1GetProps {
  patientId: string;
  name: string;
  dpid: string;
}

const BFSection1Get: React.FC<BFSection1GetProps> = ({
  patientId,
  name,
  dpid,
}) => {
  const { data, isLoading, isError, error } = GetBFSection1Data(patientId);

  if (isLoading) {
    return (
      <View style={styles.progressbar}>
        <LinearProgress />
      </View>
    );
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

  const section1Data = {
    name,
    dpid,
    ...data?.data,
  };

  return (
    <View>
      {section1FormModel.map((item, index) => {
        if (item.type === 'title') {
          return (
            <Text style={styles.title} key={`${index}-${item}`}>
              {item.label}
            </Text>
          );
        } else if (item.type === 'bigtitle') {
          return (
            <Text style={styles.bigtitle} key={`${index}-${item}`}>
              {item.label}
            </Text>
          );
        } else {
          return (
            <CustomCard key={`${index}-${item}`}>
              <Text style={styles.title}>{toHeaderCase(item.label)}</Text>
              <Divider style={styles.dividerStyle} />
              <Text style={styles.subtitle}>
                {toHeaderCase(section1Data[item.name] ?? 'Nil')}
              </Text>
            </CustomCard>
          );
        }
      })}
    </View>
  );
};

interface BFSection2GetProps {
  patientId: string;
}

const BFSection2Get: React.FC<BFSection2GetProps> = ({ patientId }) => {
  const { data, isLoading, isError, error } = GetBFSection2Data(patientId);

  if (isLoading) {
    return (
      <View style={styles.progressbar}>
        <LinearProgress />
      </View>
    );
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
    <View>
      {section2FormModel.map((item, index) => {
        if (item.type === 'title') {
          return (
            <Text style={styles.title} key={`${index}-${item}`}>
              {item.label}
            </Text>
          );
        } else {
          return (
            <CustomCard key={`${index}-${item}`}>
              <Text style={styles.title}>{toHeaderCase(item.label)}</Text>
              <Divider style={styles.dividerStyle} />
              <Text style={styles.subtitle}>
                {toHeaderCase(data?.data[item.name] ?? 'Nil')}
              </Text>
            </CustomCard>
          );
        }
      })}
    </View>
  );
};

interface BFSection3GetProps {
  patientId: string;
}

const BFSection3Get: React.FC<BFSection3GetProps> = ({ patientId }) => {
  const { data, isLoading, isError, error } = GetBFSection3Data(patientId);

  if (isLoading) {
    return (
      <View style={styles.progressbar}>
        <LinearProgress />
      </View>
    );
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
    <View>
      {section3FormModel.map((item, index) => {
        if (item.type === 'title') {
          return (
            <Text style={styles.title} key={`${index}-${item}`}>
              {item.label}
            </Text>
          );
        } else if (item.type === 'bigtitle') {
          return (
            <Text style={styles.bigtitle} key={`${index}-${item}`}>
              {item.label}
            </Text>
          );
        } else if (item.type === 'checkbox') {
          return (
            <CustomCard key={`${index}-${item}`}>
              <Text style={styles.title}>{toHeaderCase(item.label)}</Text>
              <Divider style={styles.dividerStyle} />
              <Text style={styles.subtitle}>
                {(data?.data[item.name] as string[]).length === 0
                  ? 'Nil'
                  : data?.data[item.name].toString()}
              </Text>
            </CustomCard>
          );
        } else {
          return (
            <CustomCard key={`${index}-${item}`}>
              <Text style={styles.title}>{toHeaderCase(item.label)}</Text>
              <Divider style={styles.dividerStyle} />
              <Text style={styles.subtitle}>
                {toHeaderCase(data?.data[item.name] ?? 'Nil')}
              </Text>
            </CustomCard>
          );
        }
      })}
    </View>
  );
};

interface BFSection4GetProps {
  patientId: string;
}

const BFSection4Get: React.FC<BFSection4GetProps> = ({ patientId }) => {
  const { data, isLoading, isError, error } = GetBFSection4Data(patientId);

  if (isLoading) {
    return (
      <View style={styles.progressbar}>
        <LinearProgress />
      </View>
    );
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
    <View
      style={{
        marginBottom: 50,
      }}
    >
      {section4FormModel.map((item, index) => {
        if (item.type === 'checkbox') {
          return (
            <CustomCard key={index}>
              <Text style={styles.title}>Surgical Plan</Text>
              <Divider style={styles.dividerStyle} />
              {(data?.data.surgicalPlan as Array<string>).length === 0 ? (
                <Text style={styles.title}>
                  No surgical plan found for this patient.
                </Text>
              ) : (
                (data?.data.surgicalPlan as Array<string>).map(
                  (eachPlan, num) => {
                    return (
                      <List.Item
                        key={eachPlan}
                        left={() => (
                          <View
                            style={{
                              backgroundColor: '#5664D2',
                              borderRadius: 20,
                              height: 35,
                              width: 35,
                              margin: 10,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Text
                              style={{
                                color: '#ffffff',
                                fontWeight: 'bold',
                              }}
                            >
                              {num + 1}
                            </Text>
                          </View>
                        )}
                        title={`Plan ${num + 1}`}
                        description={eachPlan}
                      />
                    );
                  }
                )
              )}
            </CustomCard>
          );
        } else {
          return null;
        }
      })}
    </View>
  );
};

export default BFSectionGet;
