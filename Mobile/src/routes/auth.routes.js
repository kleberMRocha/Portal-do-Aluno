import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardEstudante from "../pages/dashboard-estudante";
import { AuthProvider } from "../contexts/auth";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
        <Navigator>
          <Screen
            name="DashboardEstudante"
            component={DashboardEstudante}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
