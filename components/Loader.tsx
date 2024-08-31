import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4B5563" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6", 
  },
  text: {
    marginTop: 16,
    fontSize: 18,
    color: "#6b7280",
  },
});

export default Loader;
