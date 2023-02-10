import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" w-full flex flex-col px-10 py-10 lg:px-12 lg:py-12 bg-white">
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div className="text-black flex flex-col">
          <p className="text-3xl font-bold">Contacts</p>
          <a href="mailto:info@usedaily.io">info@usedaily.io</a>
        </div>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="align-middle self-start font-medium my-4 -ml-0 lg:-ml-8 lg:my-0 lg:self-center  bg-black text-white px-[30px] py-[15px] rounded-[15px] flex items-center justify-center  lg:relative lg:top-10 "
        >
          Join the Waitlist
        </a>

        <div className="flex flex-col text-right self-start">
          <p className="text-3xl font-bold self-start">Daily</p>
        </div>
      </div>

      <div className=" flex flex-col h-full lg:flex-row items-start lg:items-center md:justify-between">
        <p
          className="mt-7 font-medium text-md "
        >
          <Link to="/terms">Terms of Use </Link>

          <Link to="/policies">
            & Privacy Policy</Link>
        </p>
        <a href="" className="font-medium text-md mb-0 pb-0 self-start lg:self-end">
          usedaily.io
        </a>
      </div>
    </div>
  );
};

export default Footer;
