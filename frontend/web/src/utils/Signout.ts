export const Signout = ({ deleteCred, router }: any) => {
  deleteCred();
  router.replace('/auth');
};
