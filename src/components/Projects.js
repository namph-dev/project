import React from "react";
import HeroImg from "../assets/Rectangle17.png";

const Projects = () => {
  return (
    <section className="bg-primary text-white px-5 pt-[50px]" id="projects">
      <div className="container mx-auto  items-center justify-center  w-full">
        <div className="about-info">
          <div className="title-2 ">
            <h2 className="text-4xl font-extrabold mb-5   pb-2">Recent Work</h2>
          </div>
        </div>
      </div>

      <div className="mx-auto container items-center  border-solid border-b-2   auto-cols-auto grid grid-flow-col    w-full ">
        <div className=" max-w-[453px] ">
          <div className="text-gray-500 font-medium text-2xl ">
            APP / JUL 2021
          </div>
          <div className="font-bold uppercase  text-4xl py-2">
            {" "}
            Flatten effect ipsum star
          </div>
          <div className="text-gray-500 font-base text-lg ">
            {" "}
            <spanm>Strikethrough reesizing polygon flatten plugin hand.</spanm>
          </div>
        </div>
        <div className=" container">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="pb-[60px]  "
          />
        </div>
      </div>
      <div className="mx-auto container  items-center border-solid border-b-2   auto-cols-auto grid grid-flow-col    w-full ">
        <div className="col-span-1 max-w-[453px] ">
          <div className="text-gray-500  font-medium text-2xl ">
            APP / JUL 2021
          </div>
          <div className="font-bold uppercase text-4xl py-2">
            {" "}
            Flatten effect ipsum star
          </div>
          <div className="text-gray-500 font-base text-lg ">
            {" "}
            <spanm>Strikethrough reesizing polygon flatten plugin hand.</spanm>
          </div>
        </div>
        <div className="container">
          <img src={HeroImg} alt="coding illustration" className="py-[60px] " />
        </div>
      </div>
      <div className="mx-auto container items-center    auto-cols-auto grid grid-flow-col    w-full ">
        <div className="col-span-1 max-w-[453px] ">
          <div className="text-gray-500 font-medium text-2xl ">
            APP / JUL 2021
          </div>
          <div className="font-bold uppercase  text-4xl py-2">
            {" "}
            Flatten effect ipsum star
          </div>
          <div className="text-gray-500 font-base text-lg ">
            {" "}
            <spanm>Strikethrough reesizing polygon flatten plugin hand.</spanm>
          </div>
        </div>
        <div className=" container">
          <img src={HeroImg} alt="coding illustration" className="py-[60px] " />
        </div>
      </div>
      <div className="text-center pt-2">
        <a href="/" className="border-solid border-b-2 pb-2">
          Load More (12)
        </a>
      </div>
    </section>
  );
};

export default Projects;
