import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Who We Insure</h3>
                <ul role="list" className="mt-2 space-y-2">
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Small Business</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Startup</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">E-Commerce</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Freelancer</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">What We Cover</h3>
                <ul role="list" className="mt-2 space-y-2">
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">General Liability</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Business Owner's Policy</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Workers Compensation</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Cyber</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Professional Liability</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Management Liability</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">About</h3>
                <ul role="list" className="mt-2 space-y-2">
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="">Partners</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">About Us</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Blog</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Help center</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Legal</h3>
                <ul role="list" className="mt-2 space-y-2">
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="">File a claim</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Privacy</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Terms</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Compensation Disclosure</a></li>
                  <li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Licenses</a></li>
                </ul>
              </div>
            </div>
            <div className="absolute right-4">
              <img alt="SOC2 Compliant" src="https://www.coverdash.com/_next/image?url=%2Fimg%2Fsocforserviceorganizationslogosos.png&w=64&q=75" decoding="async" />
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4 md:flex md:items-center md:justify-between">
          <div className="flex">
            <div>
              <img alt="Coverdash logo" src="https://www.coverdash.com/_next/image?url=%2Fcoverdash_logo_new_light_transparent_shield.png&w=256&q=75" decoding="async" />
              <p className="pt-1 text-sm text-gray-400">© 2024 Coverdash, Inc. All rights reserved.</p>
            </div>
          </div>
          <div className="flex space-x-4 md:order-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
