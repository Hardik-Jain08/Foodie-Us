import React from "react";
import { IMG_APPSTORE, IMG_PLAYSTORE } from "../utils/constants";

const Footer = () => {
    return (
        <div className="flex justify-around bg-black text-white font-Arvo px-5 py-10">
            <div>
                <h1 className="my-4 text-[#9e9a9a] font-bold">COMPANY</h1>
                <ul class="cursor-pointer">
                    <li class="my-2">About Us</li>
                    <li class="my-2">Team</li>
                    <li class="my-2">Careers</li>
                    <li class="my-2">Food Studio Blog</li>
                    <li class="my-2">Bug Bounty</li>
                    <li class="my-2">Food Studio One</li>
                    <li class="my-2">Food Studio Corporate</li>
                </ul>
            </div>
            <div>
                <h1 class="my-4 text-[#9e9a9a] font-bold">CONTACT</h1>
                <ul class="cursor-pointer">
                    <li class="my-2">Help and Support</li>
                    <li class="my-2">Partner With Us</li>
                    <li class="my-2">Ride With Us</li>
                </ul>
            </div>
            <div>
                <h1 class="my-4 text-[#9e9a9a] font-bold">LEGAL</h1>
                <ul class="cursor-pointer">
                    <li class="my-2">Terms and Conditions</li>
                    <li class="my-2">Refund and Cancellation</li>
                    <li class="my-2">Privacy Policy</li>
                    <li class="my-2">Cookie Policy</li>
                    <li class="my-2">Offer Terms</li>
                </ul>
            </div>
            <div>
                <img class="cursor-pointer my-2" src={IMG_APPSTORE} alt="" />
                <img class="cursor-pointer my-2" src={IMG_PLAYSTORE} alt="" />            
            </div>
        </div>
    );
}

export default Footer;