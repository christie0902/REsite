import React from "react";
import blogImg from "../../assets/website-design/blog.jpg";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link to="/blogs"><div className="block max-w-md mx-auto lg:max-w-l space-x-0 lg:flex lg:space-x-6 backdrop-blur-md bg-white/10 rounded-lg border border-gray-500/50 shadow-lg hover:cursor-pointer duration-300">
      <div className="rounded w-full p-4">
        <div className="square-img">
          <img src={blogImg} className="rounded" alt="blog-post" />
        </div>
        
        <div className="p-4 pl-0">
          <h2 className="font-bold text-2xl text-gray-300">
            The new release of RE Village.
          </h2>
          <p className="text-gray-300 mt-2">
            Stay tuned for the new update of RE Village and RE 4 remake. This is
            gonna be great! In store very soon, don't forget to buy!
          </p>
          <a
            href="#"
            className="inline-block text-red-200 mt-2 ml-auto hover:text-red-300 transition-colors duration-300 ease-in-out text-lg"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
