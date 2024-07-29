// src/ScrollContext.js
import React, { createContext, useRef } from 'react';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const footerRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ footerRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };
