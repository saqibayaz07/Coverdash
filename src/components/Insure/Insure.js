import React from 'react'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './Insure.css'
const Insure=()=> {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };
    return (<>
        <div className="bg-white py-16 px-12">
            {/* <div className="mx-auto container">
                <div style={{ opacity: 1, transform: "none" }}>
                    <h2 className="text-5xl text-alt font-extrabold my-7 text-center ">
                        Who we <span className="text-primary text-[#0acf83]">insure</span>
                    </h2>
                    <div className="text-center sm:w-1/2 mx-auto mt-4 text-lg text-gray-500">
                        At Coverdash, we understand how to protect your business and can provide –
                        tailored, low-cost and hassle-free insurance coverage
                    </div>
                </div>
            </div> */}


            {/* first element */}


            <section className='bg-white py-16 px-12 '>
            <h2 class="text-5xl text-alt font-extrabold my-7 text-center ">Who we <span class="text-primary">insure</span></h2>
            <div class="text-center sm:w-1/2 mx-auto mt-4 text-lg text-gray-500">At Coverdash, we understand how to protect your business and can provide – tailored, low-cost and hassle-free insurance coverage</div>
            <div className='card flex justify-center items-center gap-20'>
                <div className='img-box relative w-2/[7] h-[350px] m-7' >
                    <img class=" md:w-full md:h-full object-cover shadow-lg rounded-lg mx-auto sm:mx-0" src="https://www.coverdash.com/img/insure3.jpg" alt="Illustration of woman in front of business" aria-hidden="true" />
                </div>
                <div className='content'>
                    <p class="text-2xl font-medium text-primary">Small business owner</p>
                    <p class="text-lg mt-2 max-w-lg">Managing your own business means you have enough on your plate.</p>
                    <div class="mt-8 sm:flex gap-6"><a href="/quote" class="btn-primary p-4 w-full sm:w-auto">Get started</a><a class="btn-secondary p-4 bg-slate-400 w-full sm:w-auto rounded" href="#">Learn more</a></div>
                
                    <div className='m-8'>
                        <ul className='flex flex-wrap w-80 gap-5 '>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* 2nd  */}
            <div className='card flex justify-center items-center gap-20'>

                <div className='content'>
                    <p class="text-2xl font-medium text-primary">Startup</p>
                    <p class="text-lg mt-2 max-w-lg">Don't let unnecessary business risks make your founder journey bumpier than it needs to be.</p>
                    <div class="mt-8 sm:flex gap-6"><a href="/quote" class="btn-primary p-4 w-full sm:w-auto">Get started</a><a class="btn-secondary p-4 bg-slate-400 w-full sm:w-auto rounded" href="#">Learn more</a></div>
                    <div className='m-8'>
                        <ul className='flex flex-wrap w-80 gap-5 '>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-5 text-primary flex-shrink-0 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class='mr-0'>Hotels</h3>
                                </div>
                            </li>

                        </ul>
                    </div>
                    
                </div>
                <div className='img-box relative w-2/[7] h-[350px] m-7' >
                        <img class=" md:w-full md:h-full object-cover shadow-lg rounded-lg mx-auto sm:mx-0" src="https://www.coverdash.com/img/startup-owner.jpg" alt="Illustration of woman in front of business" aria-hidden="true" />
                    </div>
            </div>
        </section>



            {/* 2nd element  */}

            <div className="max-w-5xl mx-auto mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 grid-flow-row auto-rows-min gap-4 md:gap-8 lg:gap-12">
                    <div className="aspect-square text-center row-span-1 lg:row-span-2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <img
                                className="w-32 h-32 md:w-full md:h-full object-cover shadow-lg rounded-lg mx-auto sm:mx-0"
                                src="https://www.coverdash.com/img/insure2.jpg"
                                alt="Illustration of man holding box"
                                // aria-hidden="true"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 row-span-2 h-full flex flex-col">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <p className="text-2xl font-medium text-primary">E-Commerce merchant</p>
                            <p className="text-lg mt-2 max-w-lg">
                                Selling online is hard enough without having to think about what else
                                can go wrong.
                            </p>
                            <div className="mt-8 sm:flex">

                                <button type="button" className="text-center lg:text-left  C-btn text-white  font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 bg-[#0ACF83] dark:hover:bg-[#0ACF83] focus:[#0ACF83] border-[#0ACF83]">Get started </button>




                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    {/* <a className="btn-secondary w-full sm:w-auto" href="/e-commerce">
              Learn more
            </a> */}
                                    <button type="button" className="text-center lg:text-left  C-btn text-white  font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 bg-[#0ACF83] light:hover:bg focus:[#0ACF83] border-white">Learn more</button>

                                </div>
                            </div>
                            <div className="grid grid-cols-3 md:grid-flow-col auto-cols-fit gap-4 mt-6 max-w-xl w-auto">
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-8"
                                        src="https://www.coverdash.com/img/logos/amazon.svg"
                                        alt="Amazon Logo"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-8"
                                        src="https://www.coverdash.com/img/logos/ebay.svg"
                                        alt="Ebay Logo"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-8"
                                        src="https://www.coverdash.com/img/logos/etsy.svg"
                                        alt="Etsy Logo"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-8"
                                        src="https://www.coverdash.com/img/logos/walmart.svg"
                                        alt="Walmart Logo"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-8"
                                        src="https://www.coverdash.com/img/logos/target.svg"
                                        alt="Target Logo"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-8"
                                        src="https://www.coverdash.com/img/logos/shopify.svg"
                                        alt="Shopify Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-5xl mx-auto mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 grid-flow-row auto-rows-min gap-4 md:gap-8 lg:gap-12">
                    <div className="col-span-2 row-span-2 h-full flex flex-col justify-around order-2 md:order-1">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <p className="text-2xl font-medium text-primary">Freelancer</p>
                            <p className="text-lg mt-2 max-w-lg">
                                Freelancing is all about keeping things simple and focusing on what
                                you do best.
                            </p>
                            <div className="mt-8 sm:flex">
                                <a href="/quote" className="btn-primary w-full sm:w-auto">
                                    Get started
                                </a>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a className="btn-secondary w-full sm:w-auto" href="/freelancer">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-none md:grid-flow-col auto-cols-fit gap-4 mt-6 max-w-xl w-auto">
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-10"
                                        src="https://www.coverdash.com/img/logos/fiverr.svg"
                                        alt="Fiverr"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-10"
                                        src="https://www.coverdash.com/img/logos/upwork.svg"
                                        alt="Upwork"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-10"
                                        src="https://www.coverdash.com/img/logos/toptal.svg"
                                        alt="Toptal"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-10"
                                        src="https://www.coverdash.com/img/logos/99designs.svg"
                                        alt="99 Designs"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img className="max-h-10" src="https://www.coverdash.com/img/logos/guru.svg" alt="Guru" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="max-h-10"
                                        src="https://www.coverdash.com/img/logos/freelancer.svg"
                                        alt="Freelancer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-square text-center row-span-1 lg:row-span-2 order-1 md:order-2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <img
                                className="w-32 h-32 md:w-full md:h-full object-cover shadow-lg rounded-lg mx-auto sm:mx-0"
                                src="https://www.coverdash.com/img/insure1.jpg"
                                alt="Illustration of man holding box"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
export default Insure;