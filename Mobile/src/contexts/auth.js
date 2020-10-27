import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({
  signed: false,
  token: "",
  roleQuery: {},
  getToken: () => {},
  logOut:() => {},
  isDadosValidos:true
});

export function AuthProvider({ children }) {

  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [signed, setSigned] = useState(false);
  const [isDadosValidos,SetDadosValidos] = useState(true);

  function getToken(user, senha, eUmDocente, api) {
    const role = eUmDocente ? "docente" : "estudante";

    const userData = {
      id: user,
      senha: senha,
      role: role,
    };

    api
      .post("login", userData)
      .then((res) => {
        setUser(res.data.roleQuery);
        setToken(res.data.token);
        setSigned(true);
        SetDadosValidos(true);
      })
      .catch((err) => {
        SetDadosValidos(false);
        console.log(err);
      });
  }
  function logOut(){
    setSigned(false);
    setToken('');
  }
  
  return (
    <AuthContext.Provider
      value={{
        signed: signed,
        token: token,
        roleQuery: user,
        getToken,
        logOut,
        isDadosValidos:isDadosValidos
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
