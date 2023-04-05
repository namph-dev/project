import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=coderamrin")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 6)))
      .catch((error) => console.log(error.message));
  });

  return (
    <section className="bg-primary text-white px-5 pt-[90px]" id="blog">
      <div className="container mx-auto  items-center md:justify-between">
        <div className="about-info mb-5">
          <div className="title">
            <h2 className="text-4xl font-extrabold mb-5   pb-2">
              Blog
            </h2>
          </div>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3  items-center justify-center gap-8">
        {blogs.map((item) => {
          console.log(item);

          return (
            <div>
              <img src={item.cover_image} alt={item.title} />
              <h3 className="py-5 text-2xl font-medium text-xl">
                {item.title}
              </h3>
              <span className="py-5 text-[#CCCCCC] text-base font-normal ">
                {" "}
                {item.description}
              </span>
            </div>
          );
        })}
      </div>
      <div className="text-center pt-[51px]">
        <a href="/" className="border-solid border-b-2 pb-2">
          Load More (12)
        </a>
      </div>
    </section>
  );
};

export default Blog;
