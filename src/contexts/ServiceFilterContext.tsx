import React, { createContext, useContext, useState, ReactNode } from "react";

type ServiceFilterContextType = {
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
  clearFilter: () => void;
};

const ServiceFilterContext = createContext<ServiceFilterContextType | undefined>(undefined);

export const ServiceFilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const clearFilter = () => {
    setSelectedService(null);
  };

  return (
    <ServiceFilterContext.Provider value={{ selectedService, setSelectedService, clearFilter }}>
      {children}
    </ServiceFilterContext.Provider>
  );
};

export const useServiceFilter = () => {
  const context = useContext(ServiceFilterContext);
  if (!context) {
    throw new Error("useServiceFilter must be used within ServiceFilterProvider");
  }
  return context;
};
