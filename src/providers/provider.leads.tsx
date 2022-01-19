import React, { useState, useEffect } from "react";

export const LeadsContext = React.createContext({
  chosenServices: { website: false, onlineshoop: false, seo: false, analitycs: false, app: false, sxo: false },
  setServices: (services: { website: boolean; onlineshoop: boolean; seo: boolean; analitycs: boolean; app: boolean; sxo: boolean }) => {},
});

interface UsersProviderProps {
  children?: JSX.Element | JSX.Element[] | any;
}

const LeadsProvider = ({ children }: UsersProviderProps) => {
  const [chosenServices, setChosenServices] = useState({ website: false, onlineshoop: false, seo: false, analitycs: false, app: false, sxo: false });

  const setServices = (services: { website: boolean; onlineshoop: boolean; seo: boolean; analitycs: boolean; app: boolean; sxo: boolean }) => {
    setChosenServices(services);
  };

  return (
    <LeadsContext.Provider
      value={{
        chosenServices,
        setServices,
      }}
    >
      {children}
    </LeadsContext.Provider>
  );
};

export default LeadsProvider;
