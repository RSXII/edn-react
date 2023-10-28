import React, { createContext, useContext, useState } from "react";

interface ModalContextProps {
  showSignInModal: boolean;
  toggleSignInModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC = ({ children }) => {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };

  const value = {
    showSignInModal,
    toggleSignInModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
