import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardEstudante from "../pages/dashboard-estudante";
import { NavigationContainer } from "@react-navigation/native";
import Turmas from '../pages/turma';

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
           <Screen
            name="Turmas"
            component={Turmas}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
