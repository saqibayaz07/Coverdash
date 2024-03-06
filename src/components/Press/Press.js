import React from 'react'

const Press=()=> {
    return (<>
        <div className="flex flex-col justify-end">
            <div className="lg:mt-10 mb-4 py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">In the Press</h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="https://s3.amazonaws.com/coverdash/images/business-insider-logo.svg" alt="Business Insider" width="158" height="48" />
                        <img className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="https://s3.amazonaws.com/coverdash/images/techcrunch-logo.png" alt="TechCrunch" width="158" height="48" />
                        <img className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="https://s3.amazonaws.com/coverdash/images/axios-logo.svg" alt="Axios" width="158" height="48" />
                        <img className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="https://s3.amazonaws.com/coverdash/images/reuters-logo.svg" alt="Reuters" width="158" height="48" />
                        <img className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="https://s3.amazonaws.com/coverdash/images/cnbc-logo.png" alt="CNBC" width="158" height="48" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Press;
