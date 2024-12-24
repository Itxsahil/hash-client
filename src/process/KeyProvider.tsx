import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context value type
type KeyContextType = {
  key: string;
  setKey: (newKey: string) => void;
};

// Create the context with default value
const KeyContext = createContext<KeyContextType | undefined>(undefined);

// Custom hook to use the KeyContext
export const useKey = () => {
  const context = useContext(KeyContext);
  if (!context) {
    throw new Error("`useKey` must be used within a `KeyProvider`.");
  }
  return context;
};

// Provider component for the KeyContext
type KeyProviderProps = {
  children: ReactNode;
  initialValue?: string;
};

export const KeyProvider: React.FC<KeyProviderProps> = ({
  children,
  initialValue = "",
}) => {
  const [key, setKey] = useState<string>(initialValue);

  return (
    <KeyContext.Provider value={{ key, setKey }}>
      {children}
    </KeyContext.Provider>
  );
};

// Default export for easier module import
export default { KeyProvider, useKey };
