
import React, { createContext, useContext, useState } from 'react';
import React from 'react

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const updateUserData = (username, password) => {
    setUserData({ username, password });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
