import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getCommentsByPostId } from "@/services/posts.service";
import Loader from "@/components/Loader";
export const defaultAvatar = require("@/assets/images/no-avatar.png");

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostCommentsScreen: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await getCommentsByPostId(Number(id));
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={defaultAvatar}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    flexDirection: "row",
    alignItems: "flex-start", // Ensure alignment with text
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  body: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default PostCommentsScreen;
