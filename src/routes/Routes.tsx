import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { propsNavigationStack } from "./Models";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home/Home";

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
