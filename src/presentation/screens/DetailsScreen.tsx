import * as Clipboard from "expo-clipboard";
import { fetchPostComments } from "@/api/datos";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsCartScreen() {
  const [post, setPost] = useState({ title: "", body: "" });
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { params } = useRoute();
  const navigation = useNavigation();
  const { id, title, body } = params;

  useEffect(() => {
    if (id) {
      fetchPostComments(id).then((data) => {
        setComments(data);
        setLoading(false);
      });
    }
    setPost({ title, body });
  }, [id, title, body]);

  const handleDoubleTap = (text: string) => {
    Clipboard.setString(text);
    alert("Copied to clipboard!");
  };

  const renderComment = ({ item }: { item: any }) => (
    <View className="p-3 border border-gray-300 rounded mb-3">
      <Text className="text-lg font-semibold">{item.name}</Text>
      <Text className="text-sm text-gray-500">{item.email}</Text>
      <Text className="text-sm">{item.body}</Text>
    </View>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-5 ">
        <Pressable onPress={() => handleDoubleTap(post.title)}>
          <Text className="text-2xl font-bold mb-2">{post.title}</Text>
        </Pressable>
        <Pressable onPress={() => handleDoubleTap(post.body)}>
          <Text className="text-base mb-4">{post.body}</Text>
        </Pressable>
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={<Text>No comments available</Text>}
        />
        <Button title="Back to Posts" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
