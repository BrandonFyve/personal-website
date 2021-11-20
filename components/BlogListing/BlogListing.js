import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import Container from "../container/container";
import { usePosts } from "../../hooks/usePosts/usePosts";

const placeholderPosts = [
  {
    id: 1,
    title: "This is a blog post",
    image: "https://picsum.photos/300/200",
    alt: "post 1",
  },
  {
    id: 2,
    title: "This is a blog post",
    image: "https://picsum.photos/300/200",
    alt: "post 2",
  },
  {
    id: 3,
    title: "This is a blog post",
    image: "https://picsum.photos/300/200",
    alt: "post 3",
  },
];

const BlogListing = () => {
  const { loading, posts } = usePosts();

  return (
    <Container>
      <div className="py-32">
        <h3 className="font-bold mb-6">BLOG</h3>
        <h2 className="text-6xl font-semibold">
          Helping make the world a better place through quality software
        </h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 grid-rows-2 gap-x-6 pb-32">
          {posts.map((item, i) => (
            <BlogItem
              key={item.id}
              title={item.title}
              image={item.coverImage.url}
              index={i}
              alt={item.alternativeText}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default BlogListing;
