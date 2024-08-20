import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">
        Welcome!
      </ThemedText>
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
