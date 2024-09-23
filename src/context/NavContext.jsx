import React, { createContext, useState } from 'react';  

export const NavContext = createContext();  

export const NavProvider = ({ children }) => {  
  const [isNavOpen, setIsNavOpen] = useState(false);  

  const toggleNav = () => {  
    setIsNavOpen(prevState => !prevState);  
  };  

  return (  
    <NavContext.Provider value={{ isNavOpen, toggleNav }}>  
      {children}  
    </NavContext.Provider>  
  );  
};  