// UserContext.tsx
import React, {createContext, useContext, useState} from 'react';

export type UserType = 'soleTrader' | 'limitedCompany'; // Export UserType

type UserContextType = {
  userType: UserType | null;
  businessName: string;
  addressLine1: string;
  town: string;
  postcode: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  setAddressLine1: React.Dispatch<React.SetStateAction<string>>;
  setTown: React.Dispatch<React.SetStateAction<string>>;
  setPostcode: React.Dispatch<React.SetStateAction<string>>;
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
  const [addressLine1, setAddressLine1] = useState('');
  const [town, setTown] = useState('');
  const [postcode, setPostcode] = useState('');

  const contextValue = {
    userType,
    businessName,
    addressLine1,
    town,
    postcode,
    setBusinessName,
    setAddressLine1,
    setTown,
    setPostcode,
    setUserType,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
