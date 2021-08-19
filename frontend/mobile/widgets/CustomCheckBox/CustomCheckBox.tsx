import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { Checkbox, Center } from 'native-base';
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
    paddingBottom: 15,
  },
});

interface CustomCheckBoxProps {
  label: string;
  onValueChange: any;
  value: string[];
  name: string;
  items: string[];
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  items,
  label,
  name,
  onValueChange,
  value,
}) => {
  console.log(value);
  // const [groupValue, setGroupValue] = React.useState(['Item 1', 'Item 3']);
  return (
    <CustomCard styles={styles.margin}>
      <Text style={styles.title}>{label}</Text>

      <Center>
        <Checkbox.Group
          colorScheme='blue'
          style={{
            paddingLeft: 20,
            paddingRight: 20,
          }}
          defaultValue={value}
          onChange={(values) => {
            onValueChange(name, values);
          }}
        >
          {items.map((item, index) => (
            <Checkbox
              value={item}
              key={index}
              my={1}
              accessibilityLabel='aria-label'
            >
              {toHeaderCase(item)}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Center>
    </CustomCard>
  );
};
export default CustomCheckBox;
