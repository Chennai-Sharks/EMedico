import React from 'react';
import CustomCard from '../CustomCard/CustomCard';
import { CheckIcon, Select } from 'native-base';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { HelperText } from 'react-native-paper';
import { toHeaderCase } from 'js-convert-case';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginTop: 0,
  },
  margin: {
    padding: 15,
  },
});

interface CustomDropDownProps {
  value: string;
  label: string;
  onValueChange: any;
  items: string[];
  error: boolean;
  helperText: string;
}

const CustomDropDown: React.FC<CustomDropDownProps> = (props) => {
  return (
    <CustomCard styles={styles.margin}>
      <Text style={styles.title}>{props.label}</Text>
      <Select
        borderRadius={16}
        selectedValue={props.value}
        minWidth={200}
        accessibilityLabel={props.label}
        placeholder={props.label}
        onValueChange={props.onValueChange}
        _selectedItem={{
          bg: '#556cd6',
          endIcon: <CheckIcon size={5} />,
        }}
        mt={1}
      >
        {props.items.map((item, index) => (
          <Select.Item label={toHeaderCase(item)} value={item} key={index} />
        ))}
      </Select>
      <HelperText
        style={{
          textAlign: 'center',
          fontSize: 14,
          marginTop: props.error ? 10 : 0,
        }}
        type='error'
        visible={props.error}
      >
        {props.helperText}
      </HelperText>
    </CustomCard>
  );
};
export default CustomDropDown;
