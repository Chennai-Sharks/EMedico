import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Divider, RadioButton } from 'react-native-paper';
import CustomCard from '../CustomCard/CustomCard';
import { toHeaderCase } from 'js-convert-case';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

interface CustomRadioProps {
  label: string;
  onValueChange: any;
  value: string;
  items: string[];
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  onValueChange,
  value,
  items,
}) => {
  // const [stateValue, setStateValue] = React.useState('');

  return (
    <CustomCard styles={{}}>
      <Text style={styles.title}>{label}</Text>
      <Divider />
      <RadioButton.Group onValueChange={onValueChange} value={value}>
        {items.map((item, index) => (
          <RadioButton.Item
            style={{
              marginLeft: 120,
              marginRight: 120,
            }}
            key={index}
            label={toHeaderCase(item)}
            value={item}
          />
        ))}
      </RadioButton.Group>
    </CustomCard>
  );
};

export default CustomRadio;
