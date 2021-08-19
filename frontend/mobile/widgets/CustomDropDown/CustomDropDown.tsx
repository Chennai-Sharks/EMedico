import React from 'react';
import { Picker } from '@react-native-picker/picker';
import CustomCard from '../CustomCard/CustomCard';
import { CheckIcon, Select } from 'native-base';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

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
}

const CustomDropDown: React.FC<CustomDropDownProps> = (props) => {
  // const [value, setValue] = React.useState('');
  return (
    <CustomCard styles={styles.margin}>
      <Text style={styles.title}>{props.label}</Text>
      {/* <Picker
        enabled={true}
        mode='dropdown'
        onValueChange={props.onValueChange}
        selectedValue={props.value}
      >
        {props.item.map((item, index) => {
          return (
            <Picker.Item
              key={index}
              style={{
                backgroundColor: '#fff',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label={`Select ${item}`}
              value={item}
            />
          );
        })}
      </Picker> */}
      <Select
        // style={{ borderRadius: 16 }}
        borderRadius={16}
        selectedValue={props.value}
        minWidth={200}
        accessibilityLabel={props.label}
        placeholder={props.label}
        onValueChange={props.onValueChange}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size={5} />,
        }}
        mt={1}
      >
        {props.items.map((item, index) => (
          <Select.Item label={item} value={item} key={index} />
        ))}
      </Select>
    </CustomCard>
  );
};
export default CustomDropDown;
