"use client";
import React, { useEffect } from "react";

function Page() {
  useEffect(() => {
    const sendDimension = () => {
      window.parent.postMessage(
        {
          height: 452,
          width: 384,
          source: "iframe-dimension", // Unique identifier
        },
        "*"
      );
      console.log("Dimensions sent!");
    };

    window.addEventListener("load", sendDimension);
    window.addEventListener("resize", sendDimension);
    sendDimension(); // must call this function

    return () => {
      window.removeEventListener("load", sendDimension);
      window.removeEventListener("resize", sendDimension);
    };
  }, []);

  // Main content of the page
  // Set the height and width of the main content to match the content
  // width and height be different based on the content
  // for this example, we are using h-452px w-384px to match the content
  return (
    <div className=" h-[452px] w-[384px] fixed inset-y-0 left-0 flex items-start justify-center tw-anti-aliased">
      <div className="flex items-center transition-all w-full h-full transform bg-white rounded-lg">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://www.travelarrow.io/_next/image?url=https%3A%2F%2Fcdn.travelarrow.io%2Flogo.png&w=256&q=75"
                alt="travel arrow logo"
                className="w-6 h-6 mr-1"
              />
              ×
              <img
                src="https://cdn.prod.website-files.com/661aaea740edaca5a82103d3/662314e5432ba73de164b660_pap!.svg"
                alt="pap logo"
                className="w-8 h-8 ml-1"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="m-3">
              <p className="text-lg font-light text-center text-zinc-800">
                Turn flight delays into <span className="font-bold">cash</span>{" "}
                💸
              </p>
            </div>
            <div className="pt-3 pb-3 pl-2 pr-2 mt-4 mb-6 ml-1 mr-1 border rounded-3xl border-slate-200">
              <div className="m-2">
                <div className="mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">🤝</span>
                    <span className="text-sm font-bold text-zinc-600">
                      Up to $650 in Flight Delay Compensation
                    </span>
                  </div>
                  <p className="text-sm font-normal text-zinc-500 ml-7">
                    We teamed up with pap! to automatically claim money when
                    your flights get delayed
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="mr-2">🛫️</span>
                    <span className="text-sm font-bold text-zinc-600">
                      One time set-up
                    </span>
                  </div>
                  <p className="text-sm font-normal text-zinc-500 ml-7">
                    Simply connect your email and well do the rest — we track
                    departures &amp; claim refunds.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full mt-6 px-3 py-2 text-white rounded-lg bg-pink-600 focus:outline-none">
                Opt-In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
