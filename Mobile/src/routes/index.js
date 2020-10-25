import React from "react";
import LoginRoutes from "./login.routes";
import AuthContext, { AuthProvider } from "../contexts/auth";

// import AuthRoutes from './auth.routes';

function Routes() {
  return (

      <AuthProvider>
          <LoginRoutes />
      </AuthProvider>

  );
}

export default Routes;
