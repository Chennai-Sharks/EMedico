import { credentialStore } from '@emedico/shared';

export const CheckAuthState: () => boolean = () => {
  const jwt = credentialStore((state) => state.token);

  if (jwt && jwt.length > 6) {
    return true;
  }

  return false;
};
