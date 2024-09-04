import { Button, TouchableOpacity, FlatList, View, Text } from "react-native";
import { fetchPosts } from "@/api/datos";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({}) {
  const [post, setPost] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchPosts().then((data) => {
      setPost(data);
    });
  }, []);

  const itemList = ({ item }) => (
    <SafeAreaView>
      <View className="p-4">
        <TouchableOpacity onPress={() => {}}>
          <View className="p-4 border-[1px] rounded-2xl ">
            <Text className="text-center font-bold">{item.title}</Text>
            <Text className="text-center">{item.body}</Text>
            <Button
              title="View Comments"
              onPress={() => navigation.navigate("Details", { ...item })}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={post}
      renderItem={itemList}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
