import React from 'react';

import { Button, Subheading } from 'react-native-paper';

import { credentialStore } from '@emedico/shared';

interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const cred = credentialStore((state) => state);

  return (
    <Button uppercase={false} onPress={() => cred.deleteEverything()}>
      <Subheading>Logout</Subheading>
    </Button>
  );
};
export default LogoutButton;
