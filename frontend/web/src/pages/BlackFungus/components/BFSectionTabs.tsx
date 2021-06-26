import { Tabs, Tab } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { tabStateStore } from '@emedico/shared';

interface BFSectionTabsProps {
  location: Record<string, any>;
  params: {
    patientid: string;
  };
}

const BFSectionTabs: React.FC<BFSectionTabsProps> = (props) => {
  const { value, setvalue } = tabStateStore((state) => state);

  const router = useHistory();
  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setvalue(newValue);
    router.push(
      `/black-fungus/get-patient/section${newValue + 1}/${
        props.params.patientid
      }`,
      {
        ...props.location,
      }
    );
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor='primary'
      textColor='primary'
      centered
    >
      <Tab label='Section One' />
      <Tab label='Section Two' />
      <Tab label='Section Three' />
    </Tabs>
  );
};
export default BFSectionTabs;
