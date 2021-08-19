import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, HelperText, TextInput } from 'react-native-paper';
import { Text } from 'react-native';
import CustomCard from '../CustomCard/CustomCard';

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

interface CustomTextFieldProps {
  onChangeText: any;
  value: any;
  onBlur: any;
  label: string;
  error: boolean;
  helperText: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <CustomCard styles={props.error ? styles.margin : []}>
      <Text style={styles.title}>{props.label}</Text>
      <Divider style={{ width: '100%' }} />

      <TextInput
        {...props}
        theme={{ roundness: 16 }}
        style={{
          margin: 20,
          marginTop: 10,
          marginBottom: props.error ? 10 : 0,
        }}
        mode='outlined'
      />
      <HelperText
        style={{ textAlign: 'center', fontSize: 14 }}
        type='error'
        visible={props.error}
      >
        {props.helperText}
      </HelperText>
    </CustomCard>
  );
};
export default CustomTextField;
