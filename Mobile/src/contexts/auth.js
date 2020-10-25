import React, { createContext } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext({ signed: false });

export function AuthProvider({ children }) {
return(
  <AuthContext.Provider value={{ signed: false }}>
    {children}
  </AuthContext.Provider>
);

}

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthContext;
