// UserContext.tsx
import React, {createContext, useContext, useState} from 'react';

export type UserType = 'soleTrader' | 'limitedCompany'; // Export UserType

type UserContextType = {
  userType: UserType | null;
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  setUserType: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

export const UserContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [businessName, setBusinessName] = useState('');

  const contextValue = {
    userType,
    businessName,
    setBusinessName,
    setUserType,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
