import React from 'react';
import { ProgressBar } from 'react-native-paper';

interface LinearProgressBarProps {}

const LinearProgressBar: React.FC<LinearProgressBarProps> = () => {
  return <ProgressBar indeterminate={true} />;
};
export default LinearProgressBar;
