"use client";
import React, { useEffect } from "react";

function Page() {
  useEffect(() => {
    const sendDimension = () => {
      window.postMessage(
        {
          height: 415,
          width: 384,
          source: "iframe-dimension", // Unique identifier
        },
        "*"
      );
      alert("sendDimension");
    };

    window.addEventListener("load", sendDimension);
    window.addEventListener("resize", sendDimension);

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
    <div className=" h-[415px] w-[384px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-black">
          <img
            src="https://www.travelarrow.io/_next/image?url=https%3A%2F%2Fcdn.travelarrow.io%2Flogo.png&amp;w=256&amp;q=75"
            alt="travel arrow logo"
            className="mr-1 h-6 w-6"
          />
          ×
          <img
            src="https://cdn.prod.website-files.com/661aaea740edaca5a82103d3/662314e5432ba73de164b660_pap!.svg"
            alt="pap logo"
            className="ml-2 h-8 w-8"
          />
        </div>
      </div>
      <div className="mt-2">
        <div className="m-3">
          <p className="text-center text-lg font-light text-zinc-800">
            Travel Arrow partners with <span className="font-bold">pap!</span>{" "}
            to offer exclusive flight benefits
          </p>
        </div>
        <div className="mb-6 ml-1 mr-1 mt-4 rounded-3xl border border-slate-200 pb-3 pl-2 pr-2 pt-3">
          <div className="m-2">
            <div className="mb-4">
              <div className="flex items-center">
                <span className="mr-2">🛫</span>
                <span className="text-sm font-bold text-zinc-600">
                  Flight Delay Compensation
                </span>
              </div>
              <p className="ml-7 text-sm font-normal text-zinc-500">
                Receive up to $650+ automatically if your flight departure is
                delayed
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <span className="mr-2">💸</span>
                <span className="text-sm font-bold text-zinc-600">
                  Cashback Opportunities
                </span>
              </div>
              <p className="ml-7 text-sm font-normal text-zinc-500">
                Join 10,000+ travelers who trust pap! for seamless refund claims
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-xs font-normal text-gray-400">
          By continuing, you agree to pap&apos;s{" "}
          <a
            href="https://www.joinpap.com/privacy-policy"
            className="tw-a text-gray-700"
          >
            Privacy Policy
          </a>{" "}
          and to receiving updates from joinpap.com.
        </p>
        <div className="mt-4">
          <button
            className="w-full rounded-lg px-3 py-2 text-white hover:bg-gray-800"
            style={{ backgroundColor: "rgb(188, 32, 143)" }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
