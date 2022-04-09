import React, { useLayoutEffect, useContext } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Context } from "./context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <TouchableOpacity onPress={() => navigation.navigate("Create")}>
//           <FontAwesome name="pencil" size={30} />
//         </TouchableOpacity>
//       ),
//     });
//   }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
