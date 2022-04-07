import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import BlogContext from "./context/BlogContext";

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <TouchableOpacity
        onPress={addBlogPost}
      >
        <Text>Add Post</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
