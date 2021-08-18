import React from 'react';
import { TextInput } from 'react-native-paper';

interface CustomTextFieldProps {
  onChangeText: any;
  value: any;
  onBlur: any;
  label: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <TextInput
      {...props}
      theme={{ roundness: 16 }}
      style={{ margin: 15 }}
      mode='outlined'
    />
  );
};
export default CustomTextField;
