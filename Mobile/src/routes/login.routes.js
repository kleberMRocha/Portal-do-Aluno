import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/LoginPage";
import RecuperarSenha from "../pages/recuperarSenha";
import { AuthProvider } from "../contexts/auth";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
                  <Navigator>
                    <Screen
                      name="LoginPage"
                      component={LoginPage}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Screen
                      name="RecuperarSenha"
                      component={RecuperarSenha}
                      options={{
                        headerShown: false,
                      }}
                    />
                  </Navigator>
    </NavigationContainer>

  );
}

export default Routes;
