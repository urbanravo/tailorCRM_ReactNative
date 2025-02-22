import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./src/screens/LandingPage";
import CarouselScreen from "./src/screens/CarouselScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import OTPScreen from "./src/screens/OTPScreen";
import SuccessScreen from "./src/screens/SuccessScreen";
import {OnboardingScreen} from "./src/screens/OnboardingScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CarouselScreen"
          component={CarouselScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
