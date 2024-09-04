export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export async function fetchPostComments(id: any) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
  const data = await response.json();
  return data;
}
