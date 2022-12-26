import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AllCurrency, CurrencyDetails } from "../screen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={AllCurrency} />
      <Stack.Screen name="Details" component={CurrencyDetails} />
    </Stack.Navigator>
  );
};
