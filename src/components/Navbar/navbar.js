import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [isOpenWhoWeInsure, setIsOpenWhoWeInsure] = useState(false);
    const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);

    const toggleMenuWhoWeInsure = () => {
        setIsOpenWhoWeInsure(!isOpenWhoWeInsure);
    };

    const toggleMenuAboutUs = () => {
        setIsOpenAboutUs(!isOpenAboutUs);
    };

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="https://www.coverdash.com/_next/image?url=%2Fcoverdash_logo_new_light_transparent_shield.png&w=256&q=75"
                                alt="Coverdash logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="https://www.coverdash.com/_next/image?url=%2Fcoverdash_logo_new_light_transparent_shield.png&w=256&q=75"
                                alt="Coverdash logo"
                            />
                        </div>
                        <div className="hidden mt-3 sm:ml-6 sm:flex space-x-8">
                            <a href="/" className="text-gray-500 hover:text-primary px-3 py-2 rounded-lg">
                                Home
                            </a>
                            <div className="relative group">
                                <button
                                    onClick={toggleMenuWhoWeInsure}
                                    className="text-gray-500 hover:text-primary px-3 py-2 rounded-lg inline-flex items-center"
                                >
                                    <span>Who We Insure</span>
                                    <svg
                                        className="h-5 w-5 ml-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.293 7.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {isOpenWhoWeInsure && (
                                    <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                                        <a
                                            href="/small-business"
                                            className="block px-4 py-2 text-sm text-gray-500 hover:text-primary hover:bg-green-50"
                                        >
                                            Small Business
                                        </a>
                                        <a
                                            href="/startup"
                                            className="block px-4 py-2 text-sm text-gray-500 hover:text-primary hover:bg-green-50"
                                        >
                                            Startup
                                        </a>
                                        <a
                                            href="/e-commerce"
                                            className="block px-4 py-2 text-sm text-gray-500 hover:text-primary hover:bg-green-50"
                                        >
                                            E-Commerce
                                        </a>
                                        <a
                                            href="/freelancer"
                                            className="block px-4 py-2 text-sm text-gray-500 hover:text-primary hover:bg-green-50"
                                        >
                                            Freelancer
                                        </a>
                                    </div>
                                )}
                            </div>
                            {/* Add other menu items similarly */}
                            <a href="/coverage" className="text-gray-500 hover:text-primary px-3 py-2 rounded-lg">
                                Coverage
                            </a>
                            <a href="/partner" className="text-gray-500 hover:text-primary px-3 py-2 rounded-lg">
                                Partner
                            </a>
                            <a href="/blog" className="text-gray-500 hover:text-primary px-3 py-2 rounded-lg">
                                Blog
                            </a>
                            <div className="relative group">
                                <button
                                    onClick={toggleMenuAboutUs}
                                    className="text-gray-500 hover:text-primary px-3 py-2 rounded-lg inline-flex items-center"
                                >
                                    <span>About Us</span>
                                    <svg
                                        className="h-5 w-5 ml-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.293 7.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {isOpenAboutUs && (
                                    <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                                        <a
                                            href="/about"
                                            className="block px-4 py-2 text-sm text-gray-500 hover:text-primary hover:bg-green-50"
                                        >
                                            Our Team
                                        </a>
                                        <a
                                            href="https://careers.coverdash.com/"
                                            className="block px-4 py-2 text-sm text-gray-500 hover:text-primary hover:bg-green-50"
                                        >
                                            Join Us
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="  sm:flex relative sm:items-center">
                        <div className="ml-3 ">
                            {/* <div className="sm:hidden mt-1 relative w-fit text-xs px-4 py-1.5 rounded-full border border-green-300 text-green-900 bg-green-100 font-medium">
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="mr-1 w-3 h-3 inline -mt-1"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>{' '}
                                    1 (888) 880-DASH
                                </a>
                            </div> */}
                        </div>
                        <div className="  sm:block  ml-4">
                            <a
                                href="#"
                                className="btn-secondary px-3 py-2 text-sm rounded-md"
                            >
                                Login
                            </a>
                        </div>
                        <div className=" ml-3">
                            <a
                                href="#"
                                className="btn-primary px-3 py-2 text-sm rounded-md flex items-center"
                            >
                                <span>Get a quote</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Home
                    </a>
                    <a href="/small-business" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Small Business
                    </a>
                    <a href="/startup" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Startup
                    </a>
                    <a href="/e-commerce" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        E-Commerce
                    </a>
                    <a href="/freelancer" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Freelancer
                    </a>
                    {/* Add other mobile menu items similarly */}
                    <a href="/coverage" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Coverage
                    </a>
                    <a href="/partner" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Partner
                    </a>
                    <a href="/blog" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Blog
                    </a>
                    <a href="/about" className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg">
                        Our Team
                    </a>
                    <a
                        href="https://careers.coverdash.com/"
                        className="text-gray-500 hover:text-primary block px-3 py-2 rounded-lg"
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
