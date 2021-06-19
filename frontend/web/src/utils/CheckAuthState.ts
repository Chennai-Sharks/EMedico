import { credentialStore } from '@emedico/shared';

export const CheckAuthState: () => boolean = () => {
  const jwt = credentialStore((state) => state.token);
  const exp = credentialStore((state) => state.expiresIn);
  const currDate = new Date();
  const expDate = new Date(exp);

  if (jwt && jwt.length > 6 && currDate < expDate) {
    return true;
  }

  // if (deleteEverything) deleteEverything();

  return false;
};
