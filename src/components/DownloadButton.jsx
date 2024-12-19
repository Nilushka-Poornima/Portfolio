import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import tick from "../components/tick.json";
import Lottie from "lottie-react";

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showLottie, setShowLottie] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulate a download delay (you can replace this with your actual download logic)
    setTimeout(() => {
      setIsDownloading(false);
      setShowLottie(true); // Show Lottie animation after download
    }, 1500);
  };

  return (
    <div className="flex items-end justify-center ">
      <button
        onClick={handleDownload}
        disabled={isDownloading || showLottie} // Disable the button during download and Lottie animation
        className="text-white font-bold focus:outline-none transition-all duration-400 ease-in-out"
      >
        {isDownloading ? (
          <>
            <div className="w-40 flex px-3 py-2 justify-between items-center bg-purple-900 rounded-full">
              <p className="animate-spin">
                <BsArrowClockwise size={20} />
              </p>
              Downloading...
            </div>
          </>
        ) : showLottie ? (
          <div className="w-32 bg-transparent">
            <Lottie animationData={tick} />
          </div>
        ) : (
          <>
            <a
              href="https://drive.google.com/uc?export=download&id=1p22pGpZ66Yrp7_9slRoWIXrs6H-_-81-"
              download="CV.pdf"
              onClick={handleDownload}
              className="animate-pulse flex justify-between items-center gap-2 bg-transparent border border-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white hover:animate-none text-green-500 px-4 py-2 rounded-full"
            >
              <AiOutlineCloudDownload size={25} />
              Download Resume
            </a>
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadButton;
