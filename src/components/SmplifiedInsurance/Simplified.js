const Simplified = () => {
    return (
        <div className="bg-slate-100 border-t border-slate-200 py-16 relative overflow-hidden">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8">
                <div>
                    <h2 className="mt-2 text-3xl tracking-tight text-alt font-extrabold sm:text-5xl">
                        <span
                            className="text-primary"
                            style={{
                                color: "rgb(10 207 131 / var(--tw-bg-opacity))"
                            }}
                        >Simplified</span> insurance experience
                    </h2>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                        Instant access to your own personalized customer dashboard to manage, monitor and control your insurance coverages
                    </p>
                </div>
            </div>
            <div className="mt-24 max-w-4xl mx-auto">
                <img
                    className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                    src="https://www.coverdash.com/img/dashboard-home.png"
                    alt=""
                />
            </div>
            <div className="mt-32">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                        <div
                            style={{
                                opacity: "1", 
                                transform: "none"
                            }}
                        >
                            <div>
                                <span 
                                    className="flex h-12 w-12 items-center justify-center rounded-md bg-primary"
                                    style={{background:"rgb(10 207 131/var(--tw-bg-opacity))"}}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-8 w-8 text-white"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        >
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl text-alt font-extrabold">
                                    Easy access to policy information
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    No calling, emailing, or waiting on hold - access your specific policy information from anywhere at any time. We make your policy accessible and easy to understand so you can get back to running your business.
                                </p>
                                <div className="mt-6">
                                    <a href="/quote" className="btn-primary px-4 py-2">
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div
                            style={{
                                height: "100%", 
                                opacity: "1", 
                                transform: "none"
                            }}
                        >
                            <div className="px-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="https://www.coverdash.com/img/dashboard-policy.jpg"
                                    alt="Coverdash user dashboard certificate page"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div 
                            style={{
                                opacity: "1",
                                transform: "none",
                            }}
                        >
                            <div>
                                <span 
                                    className="flex h-12 w-12 items-center justify-center rounded-md bg-primary"
                                    style={{background:"rgb(10 207 131/var(--tw-bg-opacity))"}}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="2" 
                                        stroke="currentColor" 
                                        aria-hidden="true" 
                                        className="h-8 w-8 text-white"
                                    >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                            >
                                            </path>
                                    </svg>
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-extrabold text-alt">
                                    Create a certificate of insurance (“COI”) in seconds
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    Certificates of insurance protect small business owners and their partners before they begin working together. Has a client or business partner requested proof of business insurance coverage? You can instantaneously generate certificates of insurance for your business on your own or with the assistance of a Coverdash agent.
                                </p>
                                <div className="mt-6">
                                    <a 
                                        href="/quote" 
                                        className="btn-primary px-4 py-2"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-6"></div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div 
                            style={{
                                height: "100%",
                                opacity: "1", 
                                transform: "translateY(25px) translateZ(0px)"
                            }}
                        >
                            <div 
                                className="px-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                            >
                                <img 
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" 
                                    src="https://www.coverdash.com/img/dashboard-cert.jpg" 
                                    alt="certificate image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                        <div 
                            style={{
                                opacity: "1", 
                                transform: "none",
                            }}
                        >
                            <div>
                                <span 
                                    style={{background:"rgb(10 207 131/var(--tw-bg-opacity))"}}
                                    className="flex h-12 w-12 items-center justify-center rounded-md bg-primary"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="2" 
                                        stroke="currentColor" 
                                        aria-hidden="true" 
                                        className="h-8 w-8 text-white"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        >
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl text-alt font-extrabold">
                                    Want to chat? We're here to help
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    Coverdash's team of insurance experts are standing by to provide one-on-one support. Reach out with any questions, concerns, or requests and let us do what we do best.
                                </p>
                                <div className="mt-6">
                                    <a href="/quote" className="btn-primary px-4 py-2">
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div 
                            style={{
                                height: "100%", 
                                opacity: "1", 
                                transform: "none",
                            }}
                        >
                            <div className="px-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img 
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" 
                                    src="https://www.coverdash.com/img/dashboard-chat.jpg" 
                                    alt="Coverdash user dashboard support"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Simplified;