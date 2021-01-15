import React, { createContext, useState } from 'react';

export const AnnonceContext = createContext({
  annonce: [],
  setAnnonce: () => {},
});

AnnonceContext.displayName = 'AnnonceContext';

const AnnonceProvider = ({ children }) => {
  const [annonce, setAnnonce] = useState([]);

  return (
    <AnnonceContext.Provider value={{ annonce, setAnnonce }}>
      {children}
    </AnnonceContext.Provider>
  );
};

export default AnnonceProvider;
