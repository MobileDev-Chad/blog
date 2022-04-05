import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./src/screens/IndexScreen";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

