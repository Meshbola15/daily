import React from "react";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col px-10 py-10 lg:px-28 lg:py-12 bg-white">
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div className="text-black flex flex-col">
          <p className="text-3xl font-bold">Contacts</p>
          <a href="mailto:info@usedaily.io">info@usedaily.io</a>
        </div>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="align-middle self-start font-medium my-4 lg:my-0 lg:self-center bg-black text-white px-[20px] py-[10px] rounded-[15px] flex items-center justify-center  relative lg:top-10 "
        >
          Join the Waitlist
        </a>

        <div className="flex flex-col text-right">
          <p className="text-3xl font-bold">Daily</p>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row items-start lg:items-center md:justify-between lg:mt-5">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 font-medium text-md "
        >
          Terms of Use & Privacy Policy
        </a>
        <a href="" className="font-medium text-md">
          usedaily.io
        </a>
      </div>
    </div>
  );
};

export default Footer;
