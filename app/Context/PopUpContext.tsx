import { createContext, useContext, useState } from "react";

type PopUpContextType = {
  isOpen: boolean;
  popUpMode: string;
  setPopUpMode: (mode: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  confirmedModalOpen: boolean;
  setConfirmedModalOpen: (confirmedModalOpen: boolean) => void;
};
const PopUpContext = createContext<PopUpContextType | undefined>(undefined);
export const PopUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpMode, setPopUpMode] = useState("booking");
  const [confirmedModalOpen, setConfirmedModalOpen] = useState(false);
  return (
    <PopUpContext.Provider
      value={{
        isOpen,
        setIsOpen,
        popUpMode,
        setPopUpMode,
        confirmedModalOpen,
        setConfirmedModalOpen,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
export const usePopUp = () => {
  const context = useContext(PopUpContext);
  if (context === undefined) {
    throw new Error("usePopUp must be used within a PopUpProvider");
  }
  return context;
};
