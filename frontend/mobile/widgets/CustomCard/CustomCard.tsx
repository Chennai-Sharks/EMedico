import React from 'react';
import { StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

interface CustomCardProps {
  styles?: any;
}

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 16,
    backgroundColor: 'white',
    overflow: 'hidden',
    margin: 15,
  },
});

const CustomCard: React.FC<CustomCardProps> = (props) => {
  return (
    <Card style={[styles.cardStyle, props.styles]} elevation={8}>
      {props.children}
    </Card>
  );
};
export default CustomCard;
