import React from "react";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { TbChecks } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <section
      className="bg-secondery text-white px-5 pt-[100px] pb-[60px]"
      id="about"
    >
      <div className="container mx-auto  items-center justify-center ">
        <div className="about-info">
          <div className="title ">
            <h2 className="text-5xl font-extrabold mb-5   pb-2">Contact</h2>
          </div>
          <div className="mx-auto container  auto-cols-auto grid grid-flow-col    w-full ">
            <div className="">
              <p className="text-4xl font-bold mb-5  w-full  ">Contact Info</p>
              <p className=" text-gray-500 max-w-[560px] ">
                Scale underline overflow group line project font create italic
                frame. Union vector underline library fill arrange duplicate
                polygon opacity underline.
              </p>
              <div className="flex pt-5 items-center  ">
                <div className="pr-3">
                  <BiMap />
                </div>
                <div>
                  <p>Address</p>
                  <span className="text-gray-500">Thanh xuân, Hà Nội</span>
                </div>
              </div>
              <div className="flex pt-5 items-center ">
                <div className="pr-3">
                  <AiOutlineMail />
                </div>
                <div>
                  <p>Mail</p>
                  <span className="text-gray-500">content@mail.com</span>
                </div>
              </div>
              <div className="flex pt-5 items-center ">
                <div className="pr-3">
                  <TbChecks />
                </div>
                <div>
                  <p>Freelance </p>
                  <span className="text-gray-500">Available</span>
                </div>
              </div>
              <div className="flex pt-5 items-center ">
                <div className="pr-3">
                  <BsTelephone />
                </div>
                <div>
                  <p>Phone</p>
                  <span className="text-gray-500">Thanh xuân, Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="w-full  pl-[100px] ">
              <p className="text-4xl font-bold mb-5   pb-2 ">Message Me</p>
              <form action="/" method="POST">
                <div className="flex ">
                  <div class="mb-4 ">
                    <input
                      class="appearance-none border border-[#0b0b0b] min-w-[343px] bg-[#0b0b0b] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-4 ml-4 ">
                    <input
                      class="appearance-none border border-[#0b0b0b] bg-[#0b0b0b] rounded min-w-[343px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="mb-4 ">
                  <input
                    class="appearance-none border border-[#0b0b0b] rounded min-w-[715px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#0b0b0b]"
                    id="subject"
                    name="subject"
                    type="subject"
                    placeholder="Subject"
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    class="appearance-none border border-[#0b0b0b] bg-[#0b0b0b] min-w-[715px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div class="">
                  <button
                    class="bg-[#F5D21B] hover:bg-orange-700 text-[#191919] text-sm font-bold py-2 px-4 rounded-[50px] focus:outline-none focus:shadow-outline "
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
