import React, { createContext, useState } from 'react';

interface AuthState {
  isAuth: boolean;
  setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthState>(
  null as unknown as AuthState
);

const AuthProviderContext: React.FC = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProviderContext;
