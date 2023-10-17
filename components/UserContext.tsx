// UserContext.tsx
import React, {createContext, useContext, useState} from 'react';

export type UserType = 'soleTrader' | 'limitedCompany';

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
  isDarkMode: boolean; // Add isDarkMode property

  toggleDarkMode: () => void; // Add toggleDarkMode function
};

// Create the UserContext
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook for using the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

// UserContextProvider component
export const UserContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  // Define state variables and corresponding setters

  const [userType, setUserType] = useState<UserType | null>(null);
  const [businessName, setBusinessName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [town, setTown] = useState('');
  const [postcode, setPostcode] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // Initialize isDarkMode state

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const contextValue = {
    userType,
    businessName,
    addressLine1,
    town,
    postcode,
    isDarkMode, // Add isDarkMode to the context
    setBusinessName,
    setAddressLine1,
    setTown,
    setPostcode,
    setUserType,
    toggleDarkMode, // Add toggleDarkMode to the context
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
