import React from "react";

export const usePosts = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch(`${process.env.STRAPI_URL}/posts`);
    const data = await response.json();
    console.log(data);
    setPosts(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading };
};
