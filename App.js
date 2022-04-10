import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogsScreen from "./src/screens/BlogsScreen";
import { Provider } from "./src/screens/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";


const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Blogs"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Blogs" component={BlogsScreen} 
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
