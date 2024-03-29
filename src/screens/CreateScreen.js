import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import BlogPostForm from "./components/BlogPostForm";
import { Context } from "./context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("Blogs"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
