import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "./context/BlogContext";
import BlogPostForm from "./components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => {
            navigation.pop
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
