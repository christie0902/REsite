import React from "react";
import blogImg from "../assets/website-design/blog.jpg";
import BlogCard from "./cards/BlogCard";

const BlogSection = () => {
    const articles = [
        {
            id: 1,
            title: "New RE 4 Remake Release",
            text: "Check out this new article and comment if your opinions. Don't forget to leave comments. Did you get more merchs? Wait it's so nice!",
            author: "Leon",
            imgSrc: blogImg,
            bgColor: "from-black to-yellow-900",
        },
        {
            id: 2,
            title: "What do you think about the remake?",
            text: "Check out this new article and comment if your opinions. Don't forget to leave comments. Did you get more merchs? Wait it's so nice!",
            author: "Claire",
            imgSrc: blogImg,
            bgColor: "from-black to-yellow-900",
        },
        {
            id: 3,
            title: "What to expect in RE 9?",
            text: "Check out this new article and comment if your opinions. Don't forget to leave comments. Did you get more merchs? Wait it's so nice!",
            author: "Jill",
            imgSrc: blogImg,
            bgColor: "from-black to-yellow-900",
        },
        {
            id: 3,
            title: "How to kill Nemesis?",
            text: "Check out this new article and comment if your opinions. Don't forget to leave comments. Did you get more merchs? Wait it's so nice!",
            author: "Chris",
            imgSrc: blogImg,
            bgColor: "from-black to-yellow-900",
        },
    ];

    return (
        <section className="bg-black bg-opacity-75 py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="relative mb-10 pt-8 md:mb-16">
                    <h2 className="mb-4 text-center text-3xl font-bold text-yellow-500 md:mb-6 md:text-4xl mt-5 font-bebas-neue" >
                        Community Updates
                    </h2>
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-lg bg-red-900 px-3 text-white">
                        NEW
                    </span>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <BlogCard className="md:w-1/3" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3">
                        {articles.map((article) => (
                            <article
                                key={article.id + Math.random()}
                                className="flex flex-col justify-between rounded-lg backdrop-blur-lg bg-white/10 border border-gray-500/50 shadow-lg transition hover:scale-105 hover:cursor-pointer"
                            >
                                <h2 className="mx-4 mt-4 font-serif text-2xl font-semibold text-yellow-500">
                                    {article.title}
                                </h2>
                                <p className="mx-4 mt-4 text-white">
                                    {article.text}
                                </p>
                                <a className="block rounded-lg" href="#">
                                    <div className="flex-1">
                                        <div className="flex items-center rounded-md px-4 py-3">
                                            <img
                                                className="h-10 w-10 rounded-full object-cover"
                                                src={article.imgSrc}
                                                alt={article.author}
                                            />
                                            <p className="ml-4">
                                                <strong className="block text-lg font-medium text-white">
                                                    {article.author}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
