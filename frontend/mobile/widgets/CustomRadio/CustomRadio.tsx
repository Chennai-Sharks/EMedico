import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Divider, HelperText, RadioButton } from 'react-native-paper';
import CustomCard from '../CustomCard/CustomCard';
import { toHeaderCase } from 'js-convert-case';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  margin: {
    paddingBottom: 8,
  },
});

interface CustomRadioProps {
  label: string;
  onValueChange: any;
  value: string;
  items: string[];
  error: boolean;
  helperText: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  onValueChange,
  value,
  items,
  error,
  helperText,
}) => {
  return (
    <CustomCard styles={error ? styles.margin : []}>
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
      <HelperText
        style={{ textAlign: 'center', fontSize: 14 }}
        type='error'
        visible={error}
      >
        {helperText}
      </HelperText>
    </CustomCard>
  );
};

export default CustomRadio;
