import React, { useContext } from 'react';
import LoginRoutes from './login.routes';
import AuthRoutes  from './auth.routes';
import AuthContext from '../contexts/auth';

const Routes = () => {
  
  const { signed } = useContext(AuthContext);

  return (signed ? <AuthRoutes/> : <LoginRoutes/>)
   
}

export default Routes;
