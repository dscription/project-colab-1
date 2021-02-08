import React, { createContext, useState, useEffect } from 'react';
import groupAPI from '../services/groupService';

export const ManagerContext = createContext();

const ManagerContextProvider = ({ children }) => {
  const [groups, setGroups] = useState('');
  const getAllGroups = async () => {
    return await groupAPI.getAll();
  };

  useEffect(() => {
    const retreivedGroups = getAllGroups();
    console.log(retreivedGroups);
    retreivedGroups.then((newGroups) => {
      setGroups(newGroups);
    });
  }, []);

  return (
    <ManagerContext.Provider value={{ ...groups, setGroups }}>
      {children}
    </ManagerContext.Provider>
  );
};

export default ManagerContextProvider;