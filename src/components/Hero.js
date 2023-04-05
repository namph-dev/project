import React from "react";
import HeroImg1 from "../assets/avtar1.png";

import { AiFillSkype, AiOutlineGithub } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white pt-[100px]">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0   ">
          <p className="text-1">Hi! I am</p>
          <h1>Antonio Correa</h1>
          <p className="text-2">
            I design and develop services for customers of all sizes, web
            services and online stores.
          </p>
          <div className="flex py-5">
            <div className="bg-amber-300 flex text-center justify-center rounded-[50px] w-[190px] h-[48px] ">
              <button className="uppercase flex items-center  text-black">
                {" "}
                <span className=" font-bold text-sm">let’s talk</span>
                <div className="pl-2">
                  <GrLinkNext />
                </div>
              </button>
            </div>
            <div className="flex text-center justify-center rounded-[50px] w-[190px] h-[48px] ml-5  border-solid border-white border">
              <button className="uppercase flex items-center ">
                {" "}
                <div className="pr-2">
                  <BsDownload />
                </div>
                <span className=" font-bold text-sm">download cv</span>
              </button>
            </div>
          </div>
          <div className="py-5 text-base font-normal"> Find me also on:</div>
          <div className="flex ">
            <a href="/" className="pr-4 inline-block  hover:text-black">
              {" "}
              <AiFillSkype size={24} />{" "}
            </a>
            <a href="/" className="pr-4 inline-block hover:text-black">
              {" "}
              <AiOutlineGithub size={24} />{" "}
            </a>
            <a href="/" className="pr-4 inline-block hover:text-black">
              {" "}
              <FaLinkedinIn size={24} />{" "}
            </a>
          </div>
        </div>
        <div className="w-full  flex items-center justify-center ">
          <div className="hero-img1"></div>

          <div className=" avatar">
            <img src={HeroImg1} alt="coding illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
