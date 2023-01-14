import React from "react";
import Iphone from "../Assets/iphone.svg";
import App from "../Assets/Daily_card.svg";
import Card from "../Assets/Card.svg";
import bitcoin from "../Assets/Bitcoin.png";
import bitcoinExchange from "../Assets/Dollar.png";
import star from "../Assets/Hand.png";
import creditCard from "../Assets/Magnetic.png";
import Usd from "../Assets/Us.png";

const Hero = () => {
  const tabHeaderStyles = "text-2xl text-bold";
  const tabParaghapStyles = "text-md";

  return (
    <div className="w-full min-h-screen gradient-background px-12 py-12 lg:px-28 lg:py-5">
      <h2 className="text-white text-[40px] font-bold mb-24">Daily</h2>
      <div className="flex items-center justify-between flex-col lg:flex-row">
        <div className="text-white text-center lg:w-1/2 lg:text-left w-full">
          <h2 className=" text-3xl lg:text-5xl font-bold">
            Easy Crypto Spending
          </h2>
          <p className="text-md lg:text-lg mt-1 mb-8">
            Select Exchange or Wallet. Choose cryptocurrency. Pay everywhere
            with one app and no physical payment card.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[20px] py-[10px] bg-white text-black rounded-[15px] text-md font-normal"
          >
            Join the waitlist
          </a>
        </div>
        <img
          src={Iphone}
          alt="Image"
          className="w-full mt-12 h-auto md:w-[60vw] lg:h-[85vh] lg:w-auto lg:mt-0"
        />
        <img src="" alt="" class />
      </div>
      <div className="flex flex-col items-center my-[120px] text-center lg:text-left lg:my-0 lg:min-h-screen lg:justify-between lg:flex-row">
        <div className="text-white w-full lg:w-[45vw]">
          <h2 className="text-3xl font-bold mb-5">Daily</h2>
          <p className="text-md">
            "Daily connects your custodial and non-custodial wallets, allowing
            you to spend your cryptocurrencies anytime, anywhere, instantly
            using Apple Pay or Google Pay without identity verification, all
            while earning $DAILY rewards."
          </p>
        </div>
        <img src={Card} alt="Daily_card" className="mt-20" />
      </div>

      <div className="my-20 lg:min-h-screen flex items-center flex-col lg:flex-row justify-between">
        <div className="flex items-start justify-start flex-col">
          <div className="items-center flex flex-row justify-start mb-1">
            <img src={bitcoinExchange} alt="Bitcoin / usd exchange" />
            <section className="flex flex-col text-white ml-10">
              <h2 className={tabHeaderStyles}>Exchanges and Wallets</h2>
              <p className={tabParaghapStyles}>
                Connect your desired Crypto Exchange and Wallet accounts
              </p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-1">
            <img src={bitcoin} alt="Bitcoin / usd exchange" />
            <section className="flex flex-col text-white ml-10">
              <h2 className={tabHeaderStyles}>Cryptocurrencies</h2>
              <p className={tabParaghapStyles}>
                Spend more than +200 cryptocurrencies
              </p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-1">
            <img src={star} alt="Bitcoin / usd exchange" />
            <section className="flex flex-col text-white ml-10">
              <h2 className={tabHeaderStyles}>Anonymity</h2>
              <p className={tabParaghapStyles}>No KYC</p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-1">
            <img src={creditCard} alt="Bitcoin / usd exchange" />
            <section className="flex flex-col text-white ml-10">
              <h2 className={tabHeaderStyles}>Virtual debitcard</h2>
              <p className={tabParaghapStyles}>
                Connect your Daily card to Apple Pay or Google Pay and
                personalize it with NFT
              </p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-1">
            <img src={Usd} alt="Bitcoin / usd exchange" />
            <section className="flex flex-col text-white ml-10">
              <h2 className={tabHeaderStyles}>Use daily</h2>
              <p className={tabParaghapStyles}>
                Pay with crypto anywhere VISA is accepted
              </p>
            </section>
          </div>
        </div>
        <img
          src={App}
          alt="App"
          className="w-3/4 mt-10 lg:mt-0 md:w-[50%] ml-0  lg:h-[90vh] lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
