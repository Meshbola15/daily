import React from "react";
import Iphone from "../Assets/iphone.png";
import App from "../Assets/Daily_card.svg";
import Card from "../Assets/Card.svg";
import bitcoin from "../Assets/Bitcoin.png";
import bitcoinExchange from "../Assets/Dollar.png";
import star from "../Assets/Hand.png";
import creditCard from "../Assets/Magnetic.png";
import Usd from "../Assets/Us.png";

const Hero = () => {
  const tabHeaderStyles = "text-2xl lg:text-3xl font-[500]";
  const tabParaghapStyles = "text-neutral-400 text-lg lg:text-xl";

  return (
    <div className="w-full min-h-screen gradient-background px-10 py-10 lg:px-12 lg:py-5">
      <h2 className="text-white text-[25px] lg:text-[40px] font-bold mb-20 lg:mb-5">
        Daily
      </h2>
      <div className="flex items-center justify-between flex-col lg:flex-row w-full">
        <div className="text-white text-center mt-0 mr-0 lg:mr-10 lg:w-[50vw] lg:text-left w-full">
          <h2 className=" text-4xl mb-4 lg:text-6xl font-bold">
            Easy Crypto Spending
          </h2>
          <p className="text-base text-neutral-400 lg:text-xl mt-1 mb-8">
            Select Exchange or Wallet. Choose cryptocurrency. Pay everywhere
            with one app and no physical payment card.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] py-[15px] bg-white text-black font-medium rounded-[15px] text-md"
          >
            Join the Waitlist
          </a>
        </div>
        <img
          src={Iphone}
          alt="Image"
          className=" mt-12 h-auto w-full lg:-mt-24 lg:w-auto lg:h-screen mr-0 pr-0"
        />
        {/* <img src="" alt="" class /> */}
      </div>
      <div className="flex flex-col items-center justify-center my-[120px] text-center lg:text-left lg:my-0 lg:min-h-screen lg:justify-between lg:flex-row">
        <div className="text-white w-full h-auto lg:w-[45vw]">
          <h2 className="text-5xl font-bold mb-5">Daily</h2>
          <p className="text-lg lg:text-xl text-neutral-400">
            "Daily connects your custodial and non-custodial wallets, allowing
            you to spend your cryptocurrencies anytime, anywhere, instantly
            using Apple Pay or Google Pay without identity verification, all
            while earning $DAILY rewards."
          </p>
        </div>
        <img src={Card} alt="Daily_card" className="lg:mt-0 mt-20" />
      </div>

      <div className="my-20 lg:min-h-screen flex items-center flex-col lg:flex-row justify-between">
        <div className="flex items-start w-full lg:w-1/2 justify-start flex-col">
          <div className="items-center flex flex-row justify-start mb-4">
            <img
              src={bitcoinExchange}
              alt="Bitcoin / usd exchange"
              className="w-[40px] lg:w-auto"
            />
            <section className="flex flex-col text-white ml-4 lg:ml-10">
              <h2 className={tabHeaderStyles}>Exchanges and Wallets</h2>
              <p className={tabParaghapStyles}>
                Connect your desired Crypto Exchange and Wallet accounts
              </p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-4">
            <img
              src={bitcoin}
              alt="Bitcoin / usd exchange"
              className="w-[40px] lg:w-auto"
            />
            <section className="flex flex-col text-white ml-4 lg:ml-10">
              <h2 className={tabHeaderStyles}>Cryptocurrencies</h2>
              <p className={tabParaghapStyles}>
                Spend more than +200 cryptocurrencies
              </p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-4">
            <img
              src={star}
              alt="Bitcoin / usd exchange"
              className="w-[40px] lg:w-auto"
            />
            <section className="flex flex-col text-white ml-4 lg:ml-10">
              <h2 className={tabHeaderStyles}>Anonymity</h2>
              <p className={tabParaghapStyles}>No KYC</p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-4">
            <img
              src={creditCard}
              alt="Bitcoin / usd exchange"
              className="w-[40px] lg:w-auto"
            />
            <section className="flex flex-col text-white ml-4 lg:ml-10">
              <h2 className={tabHeaderStyles}>Virtual debitcard</h2>
              <p className={tabParaghapStyles}>
                Connect your Daily card to Apple Pay or Google Pay and
                personalize it with NFT
              </p>
            </section>
          </div>
          <div className="items-center flex flex-row justify-start mb-4">
            <img
              src={Usd}
              alt="Bitcoin / usd exchange"
              className="w-[40px] lg:w-auto"
            />
            <section className="flex flex-col text-white ml-4 lg:ml-10">
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
          className="w-full mt-10 lg:mt-0 md:w-[50vw] ml-0 lg:h-[100vh] lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
