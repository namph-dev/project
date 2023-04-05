import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-[100px]" id="about">
      <div className="container mx-auto  items-center justify-center ">
        <div className="about-info">
          <div className="title-1  ">
            <h2 className="text-4xl font-extrabold mb-5   pb-2">About Me</h2>
          </div>
          <div className="flex  w-full">
            <div className="min-w-[339px]">
              <div className="flex">
                <p className="pb-5 font-bold"> Birthday </p>
                <p className="pl-[16px] text-gray-400">01/09/1990</p>
              </div>
              <div className="flex">
                <p className="pb-5 font-bold"> Age </p>
                <p className="pl-[16px] text-gray-400">32</p>
              </div>
              <div className="flex">
                <p className="pb-5 font-bold"> Resident </p>
                <p className="pl-[16px] text-gray-400">Singapore</p>
              </div>
              <div className="flex">
                <p className="pb-5 font-bold"> Email </p>
                <p className="pl-[16px] text-gray-400">Laocai@gmail.com</p>
              </div>
              <div className="flex">
                <p className="pb-5 font-bold"> Phone </p>
                <p className="pl-5 text-gray-400">+88 012 322 0980</p>
              </div>
              <div className="flex">
                <p className="pb-5 font-bold"> Skype </p>
                <p className="pl-[16px] text-gray-400">antonio_correa</p>
              </div>
            </div>
            <div className="pl-[110px] text-gray-400 ">
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.{" "}
              </p>
              <ul className="list-disc py-2 ml-6 ">
                <li>
                  Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                  urna.
                </li>
                <li>
                  Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                  urna.
                </li>
                <li>
                  Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                  urna.
                </li>
                <li>
                  Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                  urna.
                </li>
              </ul>
              <p className="pt-2">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full pt-[60px] ">
            <div className="col-span-1 text-base max-w-[400px]">
              <p className="font-bold text-2xl">Education</p>
              <div className="pt-10">
                <span className=" font-bold">Graphic Designer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2010 - May 2012</p>
                <span>
                  Blue ladder job paradigm asserts. Underlying light flesh
                  relaxation paradigm note it's mifflin could join.
                </span>
              </div>

              <div className="pt-6">
                <span className=" font-bold">BA IT</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2019 - May 2020</p>
                <span>
                  Guys cause idea best live. Us stakeholder we including ask
                  roll businesses.
                </span>
              </div>
              <div className="pt-6">
                <span className=" font-bold">Backend Developer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2019 - May 2020</p>
                <span>
                  Day exploratory see overflow leverage ensure stop dunder
                  support marginalised. 4-blocker let horse cadence minimize
                  seems.
                </span>
              </div>
            </div>
            <div className="col-span-1 text-base ml-2  max-w-[400px]">
              <p className="font-bold text-2xl">Experience</p>
              <div className="pt-5">
                <span className=" font-bold">JavaScript / PHP Developer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2010 - May 2012</p>
                <span>
                  Blue ladder job paradigm asserts. Underlying light flesh
                  relaxation paradigm note it's mifflin could join.
                </span>
              </div>
              <div className="pt-5">
                <span className=" font-bold">Senior Frontend Developer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2019 - May 2020</p>
                <span>
                  And open please forward initiative incentivization sorry panel
                  ui brainstorming. Mindfulness can high unpack work jumping.
                </span>
              </div>
              <div className="pt-5">
                <span className=" font-bold">Ui/Ux Designer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2019 - May 2020</p>
                <span>
                  Silently today tomorrow driving ladder overflow masking
                  should. Journey if ocean nail items initiative nor our.
                </span>
              </div>
            </div>
            <div className="col-span-1 text-base ml-2  max-w-[400px]">
              <p className="font-bold text-2xl">Certificates</p>
              <div className="pt-5">
                <span className=" font-bold">Graphic Designer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2010 - May 2012</p>
              </div>
              <div className="pt-5">
                <span className=" font-bold">Graphic Designer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2010 - May 2012</p>
              </div>
              <div className="pt-5">
                <span className=" font-bold">Graphic Designer</span>
              </div>
              <div className="pt-3">
                <p className="text-gray-500">August 2010 - May 2012</p>
              </div>
              <p className="font-bold text-2xl pt-5">Skill</p>
              <div className="pt-[24px]">
                <div class=" text-xs inline-flex items-center font-bold leading-sm uppercase h-[32px] px-3 py-1 bg-[#030302]  rounded-[5px]">
                  <span>Html & CSS</span>
                </div>
                <div class=" text-xs inline-flex items-center font-bold leading-sm uppercase  h-[32px]   px-3 py-1 bg-[#030302]  rounded-[5px] ml-4">
                  <span>Javascript</span>
                </div>
                <div class=" text-xs inline-flex items-center font-bold leading-sm uppercase   h-[32px] px-3 ml-4 py-1 bg-[#030302]  rounded-[5px]">
                  <span>Wordpress </span>
                </div>
                <div class=" text-xs inline-flex items-center font-bold leading-sm uppercase  h-[32px] px-3 mt-4 py-1 bg-[#030302]  rounded-[5px]">
                  <span>NodeJS</span>
                </div>
                <div class=" text-xs inline-flex items-center font-bold leading-sm uppercase   h-[32px] px-3 ml-4 py-1 bg-[#030302]  rounded-[5px]">
                  <span>PHP </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
