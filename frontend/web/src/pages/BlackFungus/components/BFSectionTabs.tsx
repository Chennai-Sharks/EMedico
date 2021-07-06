import { Tabs, Tab } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { tabStateStore } from '@emedico/shared';

interface BFSectionTabsProps {
  location: Record<string, any>;
  params: {
    patientid: string;
  };
  section: number;
}

const BFSectionTabs: React.FC<BFSectionTabsProps> = (props) => {
  const { value, setvalue } = tabStateStore((state) => state);

  const router = useHistory();
  React.useEffect(() => {
    setvalue(props.section - 1);
  }, [props.section, setvalue]);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    router.push(
      `/mucormycosis/get-patient/section${newValue + 1}/${
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
      <Tab label='Surgical Plan' />
    </Tabs>
  );
};
export default BFSectionTabs;
