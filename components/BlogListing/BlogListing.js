import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import Container from "../container/container";

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
  return (
    <Container>
      <div className="py-32">
        <h3 className="font-bold mb-6">BLOG</h3>
        <h2 className="text-6xl font-semibold">
          Helping make the world a better place through quality software
        </h2>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-x-6 pb-32">
        {placeholderPosts.map((item, i) => (
          <BlogItem
            key={item.id}
            title={item.title}
            image={item.image}
            index={i}
            alt={item.alt}
          />
        ))}
      </div>
    </Container>
  );
};

export default BlogListing;
