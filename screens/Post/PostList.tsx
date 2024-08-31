import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { getPosts } from "../../services/posts.service";
import PostItem from "@/components/posts/PostItem";
import PaginationControls from "@/components/PaginationControls";
import { Post } from "@/interfaces/interfaces";
import Loader from "@/components/Loader";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await getPosts(page);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page > 1 ? page - 1 : 1);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={posts}
        keyExtractor={(item: Post) => item.id.toString()}
        renderItem={({ item }) => <PostItem item={item} />}
      />
      <PaginationControls
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        currentPage={page}
      />
    </View>
  );
}
