import React from "react";
import Image from "next/image";

const BlogItem = ({ title, image, alt, index }) => {
  return (
    <div
      className={`flex flex-col cursor-pointer ${
        index === 0 ? "col-span-2 row-span-2" : null
      }`}
    >
      {/* <Image
        src={image}
        alt={alt}
        width={300}
        height={index === 0 ? 400 : 200}
      /> */}
      <p className="mt-6 text-xl">{title}</p>
      <div className="flex justify-between items-center pt-3">
        <p className="text-xl font-thin">Read more</p>
        <p className="transform -rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
