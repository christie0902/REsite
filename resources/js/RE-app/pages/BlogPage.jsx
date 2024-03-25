import React from "react";
import { useEffect } from "react";

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-black antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl htmlFormat htmlFormat-sm sm:htmlFormat-base lg:htmlFormat-lg htmlFormat-blue dark:htmlFormat-invert">
                        <header className="mb-4 lg:mb-6 not-htmlFormat">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img
                                        className="mr-4 w-16 h-16 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                        alt="Jese Leos"
                                    />
                                    <div>
                                        <a
                                            href="#"
                                            rel="author"
                                            className="text-xl font-bold text-gray-900 dark:text-white"
                                        >
                                            Jese Leos
                                        </a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            A long term Resident Evil fan
                                        </p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            <time
                                                pubdate
                                                dateTime="2024-02-2"
                                                title="February 2th, 2024"
                                            >
                                                Feb. 2, 2024
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold text-yellow-700 lg:mb-6 lg:text-4xl font-bebas-neu">
                                RESIDENT EVIL GAME SERIES COMMUNITY
                            </h1>
                        </header>

                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.{" "}
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. At quis risus sed vulputate
                            odio. Adipiscing elit duis tristique sollicitudin
                            nibh sit amet commodo nulla. Mauris commodo quis
                            imperdiet massa..
                        </p>
                        <figure>
                            <img
                                src="https://res.cloudinary.com/diwszstai/image/upload/v1710096114/ReProduct/product7a_yyafaj.jpg"
                                alt=""
                            />
                        </figure>
                        <h2>Getting started with RE community</h2>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. At quis risus sed vulputate
                            odio.
                        </p>

                        <ol>
                            <li>
                                <strong>Best game ever!</strong>. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </li>
                            <li>
                                <strong>This is so cool</strong>.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. At quis risus sed vulputate odio.
                            </li>
                        </ol>

                        <section className="not-htmlFormat">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                                    Discussion (20)
                                </h2>
                            </div>
                            <htmlForm className="mb-6">
                                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label
                                        htmlFor="comment"
                                        className="sr-only"
                                    >
                                        Your comment
                                    </label>
                                    <textarea
                                        id="comment"
                                        rows="6"
                                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                        placeholder="Write a comment..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                                >
                                    Post comment
                                </button>
                            </htmlForm>
                            <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                            <img
                                                className="mr-2 w-6 h-6 rounded-full"
                                                src="https://res.cloudinary.com/diwszstai/image/upload/v1710096114/ReProduct/product7a_yyafaj.jpg"
                                                alt="Michael Gough"
                                            />
                                            Michael Nana
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            <time
                                                pubdate
                                                datetime="2022-02-04"
                                                title="February 8th, 2024"
                                            >
                                                Feb. 8, 2024
                                            </time>
                                        </p>
                                    </div>
                                    <button
                                        id="dropdownComment1Button"
                                        data-dropdown-toggle="dropdownComment1"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 3"
                                        >
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                        <span className="sr-only">
                                            Comment settings
                                        </span>
                                    </button>
                                </footer>
                            </article>
                        </section>
                    </article>
                </div>
            </main>

            <aside
                aria-label="Related articles"
                className="py-8 lg:py-24 bg-black"
            >
                <div className="px-4 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                        Related articles
                    </h2>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        <article className="max-w-xs">
                            <a href="#">
                                <img
                                    src="https://res.cloudinary.com/diwszstai/image/upload/v1710107138/ReProduct/product29_ebbg4h.jpg"
                                    className="mb-5 rounded-lg"
                                    alt="Image 1"
                                />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">RE 4 Remake</a>
                            </h2>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">
                                {" "}
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.{" "}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                            >
                                Read in 2 minutes
                            </a>
                        </article>
                        <article className="max-w-xs">
                            <a href="#">
                                <img
                                    src="https://res.cloudinary.com/diwszstai/image/upload/v1710096113/ReProduct/product6b_rylijg.jpg"
                                    className="mb-5 rounded-lg"
                                    alt="Image 2"
                                />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">New collection of Raccoon City</a>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                            >
                                Read in 12 minutes
                            </a>
                        </article>
                        <article className="max-w-xs">
                            <a href="#">
                                <img
                                    src="https://res.cloudinary.com/diwszstai/image/upload/v1710096104/ReProduct/product19_ovd7ua.png"
                                    className="mb-5 rounded-lg"
                                    alt="Image 3"
                                />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">Very nice, exciting</a>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                            >
                                Read in 8 minutes
                            </a>
                        </article>
                        <article className="max-w-xs">
                            <a href="#">
                                <img
                                    src="https://res.cloudinary.com/diwszstai/image/upload/v1710107138/ReProduct/product29_ebbg4h.jpg"
                                    className="mb-5 rounded-lg"
                                    alt="Image 1"
                                />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">RE 4 Remake</a>
                            </h2>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">
                                {" "}
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.{" "}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                            >
                                Read in 2 minutes
                            </a>
                        </article>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default BlogPage;
