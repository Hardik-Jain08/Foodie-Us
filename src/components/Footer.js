import React from "react";
import { Link } from "react-router-dom";
import { IMG_APPSTORE, IMG_PLAYSTORE } from "../utils/constants";

const Footer = () => {
    return (
        <div className="md:flex justify-around bg-black text-white font-Arvo px-5 py-10">
            <Link to='/about'>
                <h1 className="my-4 text-[#9e9a9a] font-bold">COMPANY</h1>
                <ul className="cursor-pointer">
                    <li className="my-2">About Us</li>
                    <li className="my-2">Team</li>
                    <li className="my-2">Careers</li>
                    <li className="my-2">Foodie Us Blog</li>
                    <li className="my-2">Bug Bounty</li>
                    <li className="my-2">Foodie Us One</li>
                    <li className="my-2">Foodie Us Corporate</li>
                </ul>
            </Link>
            <Link to='/contact'>
                <h1 className="my-4 text-[#9e9a9a] font-bold">CONTACT</h1>
                <ul className="cursor-pointer">
                    <li className="my-2">Help and Support</li>
                    <li className="my-2">Partner With Us</li>
                    <li className="my-2">Ride With Us</li>
                </ul>
            </Link>
            <Link to='/help'>
                <h1 className="my-4 text-[#9e9a9a] font-bold">LEGAL</h1>
                <ul className="cursor-pointer">
                    <li className="my-2">Terms and Conditions</li>
                    <li className="my-2">Refund and Cancellation</li>
                    <li className="my-2">Privacy Policy</li>
                    <li className="my-2">Cookie Policy</li>
                    <li className="my-2">Offer Terms</li>
                </ul>
            </Link>
            <div>
                <img className="cursor-pointer my-2" src={IMG_APPSTORE} alt="" />
                <img className="cursor-pointer my-2" src={IMG_PLAYSTORE} alt="" />            
            </div>
        </div>
    );
}

export default Footer;