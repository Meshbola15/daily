import React from "react";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col px-12 py-12 lg:px-28 lg:py-12 bg-white">
      <div className="relative flex items-center justify-between">
        <div className="text-black flex flex-col">
          <p className="text-2xl font-bold">Contacts</p>
          <a href="mailto:info@usedaily.io">info@usedaily.io</a>
        </div>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="align-middle self-center bg-black text-white px-[20px] py-[10px] rounded-[15px] flex items-center justify-center"
        >
          Join the waitlist
        </a>

        <div className="flex flex-col text-right">
          <p className="text-2xl font-bold">Daily</p>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-between">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 font-bold text-md "
        >
          Terms of Use & Privacy Policy
        </a>
        <a href="" className="font-bold text-md">
          usedaily.io
        </a>
      </div>
    </div>
  );
};

export default Footer;
