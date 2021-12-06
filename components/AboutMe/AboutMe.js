import React from "react";
import Container from "../container/container";
import Link from "next/link";

const AboutMe = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-24 pb-32">
        <div className="">
          <h2 className="text-3xl font-normal">About me</h2>
          <hr className="mb-6 mt-6" />
          <p className="text-xl font-thin">
            Hi, my name is Brandon. I{"'"}m a 24 year-old full-stack developer
            from Sunny South Africa. I care about helping businesses make the
            most of what the digital world has to offer.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-normal">Developer</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">
              Driven by quality code. Front-end, back-end and everything in
              between.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-normal">Problem solver</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">
              Helping Businesses solve problems with digital solutions.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-normal">Business owner</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">
              CTO and director of an amazing team at{" "}
              <Link href="https://www.5px.co.za/">
                <a target="_blank">5px.</a>
              </Link>
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-normal">Pizza enthusiast</h2>
            <hr className="mb-6 mt-6" />
            <p className="text-xl font-thin">
              You didn{"'"}t expect it all to be serious, did you?{" "}
              <span className="text-xs">
                (JK, this one is the most serious of all)
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
