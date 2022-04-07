import { VFC } from "react";
//import { BiMenu } from "react-icons/bi";
import { FaMedium, FaTelegram, FaTwitter } from "react-icons/fa";


export const WebsiteOverlay: VFC = () => {
  return (
    <div className="flex flex-col absolute w-full h-full z-10 p-0 text-white">
      <div className="flex font-bold flex-col my-auto h-full max-w-[44%] backdrop-brightness-0 p-4">
        <div className="uppercase text-8xl m-auto mb-6 mt-60 max-w-[100%] content-center">LOADING<span className="dots"><span>.</span><span>.</span><span>.</span></span></div>
        
        <div className="uppercase text-5xl m-auto mb-12 max-w-[100%] content-center">APES VS. PROTOCOLS</div>
        {/*<div className="mb-6">
          Bilidly is a roll-out of Solidly protocol on Binance Smart Chain
        </div>*/}
        <div className="flex text-3xl gap-8 mt-auto">
          <a href="https://twitter.com/bilidlyexchange" target="blank">
            <FaTwitter />
          </a>
          <a href="https://medium.com/@Bilidly" target="blank">
            <FaMedium />
          </a>
          <a href="https://t.me/bilidly" target="blank">
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};
