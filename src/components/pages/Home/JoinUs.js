import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className=" bg-black py-10">
      <div className=" container mx-auto">
        <div className=" text-center">
          <h2 className=" text-[28px] sm:text-[42px]">
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text font-semibold text-transparent">
              Accept Cryptos
            </span>
            <br /> from anyone & anywhere
          </h2>
          <button className=" mt-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-[28px] hover:from-fuchsia-500 hover:to-violet-500 ">
            Join Us
          </button>

          <div className=" mt-10 flex justify-center gap-10">
            <a href="https://twitter.com/" target="blank">
              <FaTwitter className=" text-[40px] hover:text-fuchsia-500" />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook className=" text-[40px] hover:text-fuchsia-500" />
            </a>
            <a href="https://discord.com/" target="blank">
              <FaDiscord className=" text-[40px] hover:text-fuchsia-500" />
            </a>
            <a href="https://telegram.org/" target="blank">
              <FaTelegram className=" text-[40px] hover:text-fuchsia-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
