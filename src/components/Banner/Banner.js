import React from 'react';
import "./Banner.css"
const Banner=()=> {
    return (
        <>
            <div className="pt-20 xl:pt-24 lg:pt-32 justify-center h-full flex flex-col">
                <div className="pt-6 sm:pt-8 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
                    <div className="flex flex-col justify-center px-8 xl:px-0">
                        <div className="mb-8 relative w-fit mx-auto lg:mx-0 shadow text-xs sm:text-sm px-4 py-1.5 rounded-full border border-sky-300 text-sky-900 bg-sky-100 font-medium">
                            <a href="https://www.coverdash.com/blog/coverdash-leading-embedded-business-insurance-agency-for-startups-and-smbs-announces-13-5m-in-series-a-funding" target="_blank" rel="noreferrer">
                                Read about our <span className="font-semibold">Series A</span> funding announcement
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="ml-1 w-3 h-3 sm:h-4 sm:w-4 inline -mt-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>
                        </div>
                        <div style={{ opacity: 1, transform: 'none' }}>
                            <h1 className="text-center lg:text-left text-3xl md:text-4xl xl:text-5xl tracking-tight font-bold text-alt mx-auto lg:mx-0 max-w-[18rem] sm:max-w-xs lg:max-w-xs xl:max-w-md">Business insurance in a dash for</h1>
                            <h1 className="text-center lg:text-left text-3xl md:text-4xl xl:text-5xl sm:mt-1 mb-4 tracking-tight font-bold text-primary">
                                <div className="x0 x1 x2 ">
                                    <div style={{ transition: 'width 150ms linear 0s', height: '48px', width: '186.516px' }}>
                                        <div className="x0 x3 x4 x5" style={{ opacity: 1, transform: 'translateY(0px)', position: 'absolute' }}>
                                            <span>startups</span>
                                        </div>
                                    </div>
                                </div>.
                            </h1>
                        </div>
                        <div style={{ opacity: 1, transform: 'none' }}>
                            <p className="mt-4 lg:mt-0 text-center lg:text-left max-w-md mx-auto lg:mx-0 tracking-tight text-base text-alt font-medium sm:text-lg">Tailored risk management for your growing business. From quote to coverage in clicks, not weeks.</p>
                        </div>
                        <div className="mt-4 justify-center">
                            <div style={{ opacity: 1, transform: 'none' }}>
                                {/* <div className="rounded-md mt-4 sm:mt-0 text-center lg:text-left "> 
                                    <a href="/quote" className="w-full md:w-auto btn-primary bg-[#0ACF83] text-white">  */}
                                        {/* <span></span> */}
        <button type="button" className="text-center lg:text-left mt-4 C-btn text-white  font-medium rounded-lg text-sm px-6 py-5 me-2 mb-2 bg-[#0ACF83] dark:hover:bg-[#0ACF83] focus:[#0ACF83] border-[#0ACF83]">Get a quote  

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 ml-3 inline">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                        </button>
                                    {/* </a> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="px-8 lg:px-0 hidden lg:flex lg:flex-col lg:justify-center">
                        <div className="relative w-full mx-auto max-w-2xl">
                            <video autoPlay loop muted  src="./hero-video-3-compressed.mp4" className="border border-gray-200 rounded-lg shadow">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Banner;