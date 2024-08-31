import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { handleDoubleTapCopy } from "@/helpers/clipboardHelper";

interface PostItemProps {
  item: { id: number; title: string; body: string };
}

const PostItem: React.FC<PostItemProps> = ({ item }) => {
  const router = useRouter();
  const [lastTap, setLastTap] = useState(0);
  const tapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          handleDoubleTapCopy(item.title, lastTap, setLastTap, tapTimeoutRef)
        }
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          handleDoubleTapCopy(item.body, lastTap, setLastTap, tapTimeoutRef)
        }
      >
        <Text style={styles.body}>{item.body}</Text>
      </TouchableOpacity>
      <Button
        title="View Comments"
        onPress={() => router.push(`(modal)/post/${item.id}`)}
        color="#007BFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default PostItem;
