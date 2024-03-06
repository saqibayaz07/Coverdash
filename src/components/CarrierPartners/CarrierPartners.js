const CarrierPartners = () => {
    return (
        <div className="bg-slate-900 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-slate-100">
                    Our carrier partners
                </h2>
                <div className="carousel-root mt-12" tabIndex="0">
                    <div 
                        className="carousel carousel-slider" 
                        style={{
                            width:"100%"
                        }}
                    >
                        {/* <button 
                            type="button" 
                            aria-label="previous slide / item" 
                            className="control-arrow control-prev control-disabled"
                        >
                        </button> */}
                        <div className="slider-wrapper axis-horizontal">
                            {/* <ul 
                                className="slider animated" 
                                style={{
                                    transform: "translate3d(-100%, 0px, 0px)",
                                    transitionDuration: "1500ms",
                                }}
                            >
                                
                                <li className="slide">
                                    <div className="grid grid-cols-2 md:grid-cols-7 gap-8 px-4">
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/core-specialty.svg" 
                                                alt="core-specialty logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/arch.png" 
                                                alt="arch logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/hiscox.svg" 
                                                alt="hiscox logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                style={{
                                                    width:"100px",
                                                    marginLeft:"-3rem"
                                                }}
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/atbay.png" 
                                                alt="atbay logo"
                                            />
                                        </div>
                                    </div>
                                </li> 
                                <li className="slide selected">
                                    <div className="grid grid-cols-2 md:grid-cols-7 gap-8 px-4">
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/amtrust.svg" 
                                                alt="amtrust logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/chubb.svg" 
                                                alt="chubb logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/cna.svg" 
                                                alt="cna logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/coalition.svg"
                                                alt="coalition logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/coterie.svg"
                                                alt="coterie logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/cowbell.svg" 
                                                alt="cowbell logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/next.svg" 
                                                alt="next logo"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="slide">
                                    <div className="grid grid-cols-2 md:grid-cols-7 gap-8 px-4">
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/rt-specialty.svg" 
                                                alt="rt-specialty logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/employers.svg" 
                                                alt="employers logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/foxquilt.svg" 
                                                alt="foxquilt logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/liberty-mutual.svg" 
                                                alt="liberty-mutual logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/nationwide.svg" 
                                                alt="nationwide logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/travelers.svg" 
                                                alt="travelers logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/markel.svg" 
                                                alt="markel logo"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="slide">
                                    <div className="grid grid-cols-2 md:grid-cols-7 gap-8 px-4">
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/core-specialty.svg" 
                                                alt="core-specialty logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/arch.png" 
                                                alt="arch logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/hiscox.svg" 
                                                alt="hiscox logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                style={{
                                                    width:"100px",
                                                    marginLeft:"-3rem"
                                                }} 
                                                className="h-12"
                                                src="https://www.coverdash.com/img/carriers/atbay.png" 
                                                alt="atbay logo"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="slide selected">
                                    <div className="grid grid-cols-2 md:grid-cols-7 gap-8 px-4">
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/amtrust.svg" 
                                                alt="amtrust logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/chubb.svg" 
                                                alt="chubb logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/cna.svg" 
                                                alt="cna logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/coalition.svg" 
                                                alt="coalition logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/coterie.svg" 
                                                alt="coterie logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/cowbell.svg" 
                                                alt="cowbell logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/next.svg" 
                                                alt="next logo"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul> */}
                            <div className="grid grid-cols-2 md:grid-cols-7 gap-8 px-4">
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/rt-specialty.svg" 
                                                alt="rt-specialty logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/employers.svg" 
                                                alt="employers logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/foxquilt.svg" 
                                                alt="foxquilt logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/liberty-mutual.svg" 
                                                alt="liberty-mutual logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/nationwide.svg" 
                                                alt="nationwide logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/travelers.svg" 
                                                alt="travelers logo"
                                            />
                                        </div>
                                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                            <img 
                                                className="h-12" 
                                                src="https://www.coverdash.com/img/carriers/markel.svg" 
                                                alt="markel logo"
                                            />
                                        </div>
                                    </div>
                        </div>
                        {/* <button 
                            type="button" 
                            aria-label="next slide / item" 
                            className="control-arrow control-next control-disabled"
                        >
                        </button> */}
                    </div>
                    {/* <div className="carousel">
                        <div className="thumbs-wrapper axis-vertical">
                            <button 
                                type="button" 
                                className="control-arrow control-prev control-disabled" 
                                aria-label="previous slide / item"
                            >
                            </button>
                            <ul 
                                className="thumbs animated _extra"
                            >
                            </ul>
                            <button 
                                type="button" 
                                className="control-arrow control-next control-disabled" 
                                aria-label="next slide / item"
                            >
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CarrierPartners;