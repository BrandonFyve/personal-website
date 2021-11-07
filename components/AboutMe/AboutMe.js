import React from "react";
import Container from "../container/container";

const AboutMe = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-24 pb-32">
        <div className="">
          <h2 className="text-4xl font-normal">About me</h2>
          <hr className="mb-6 mt-6" />
          <p className="text-xl font-thin">Read more</p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-normal">About me</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">Read more</p>
          </div>
          <div>
            <h2 className="text-4xl font-normal">About me</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">Read more</p>
          </div>
          <div>
            <h2 className="text-4xl font-normal">About me</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">Read more</p>
          </div>
          <div>
            <h2 className="text-4xl font-normal">About me</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">Read more</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
