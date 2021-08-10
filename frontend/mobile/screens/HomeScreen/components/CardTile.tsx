import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../../widgets/CustomCard/CustomCard';

const styles = StyleSheet.create({
  root: {
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  imgSize: {
    height: '55px',
    width: '55px',
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
