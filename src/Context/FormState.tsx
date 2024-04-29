import React, { createContext, useContext, useState } from 'react';
import SignUpForm from '../components/forms/SignUp';
import LoginComp from '../components/forms/LogInComp';

interface UserData {
  username: string;
  password: string;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (username: string, password: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC = ({ children }:any) => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    password: ''
  });

  const updateUserData = (username: string, password: string) => {
    setUserData({ username, password });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <SignUpForm/>
      <LoginComp/>
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
