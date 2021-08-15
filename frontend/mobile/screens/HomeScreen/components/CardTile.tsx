import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import Card from '../../../widgets/CustomCard/CustomCard';

const styles = StyleSheet.create({
  root: {
    padding: 15,
    display: 'flex',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  label: {
    marginLeft: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
  },
});

interface CardTilePropsProps {
  title: string;
  values: string[];
  icon?: any;
}

const CardTile: React.FC<CardTilePropsProps> = (props) => {
  return (
    <Card styles={styles.root}>
      <View>
        <Text style={styles.title}>{props.title}</Text>

        <View style={styles.details}>
          {props.values.map((item, index) => (
            <Text key={index} style={styles.textStyle}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </Card>
  );
};

export default CardTile;
