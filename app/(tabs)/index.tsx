import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { ThemedView } from "@/components/ThemedView";
import PostList from "@/screens/Post/PostList";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <PostList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
  },
});
