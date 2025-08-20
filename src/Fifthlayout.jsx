import React from "react";
import image12 from "./assets/image12.jpg";
import image13 from "./assets/image13.jpg";

const Fifthlayout = () => {
  return (
    <>
      <div className="lg:flex  justify-evenly items-center bg-[#fff1d6] lg:p-10 p-2 ">
        <div className="">
          {/* Flash Sale Heading */}
          <h1 className="lg:text-3xl text-2xl p-5 font-bold">📌 Flash Sale</h1>

          {/* Sale Descriptions */}
          <div className="text-left items-center space-y-5 py-5">
            <p>
              ➡️ "Flash Sale Alert! For 24 hours only, get 30% off all fiction
              titles. Don't miss out!"
            </p>

            <p>
              ➡️ "The clock is ticking! Our 48-hour flash sale is live. Grab
              your next favorite book at a steal before it's gone."
            </p>
          </div>

          {/* Timer */}
          <div className="flex timer lg:gap-5 gap-2">
            <div className="bg-black lg:w-fit w-20 p-6 rounded-lg shadow-lg text-center">
              <span className="text-white font-sans font-bold lg:text-3xl text-xl">
                05
              </span>
              <p className="text-white lg:text-lg font-extralight">Start</p>
            </div>
            <div className="bg-black lg:w-fit w-20  p-6 rounded-lg shadow-lg text-center">
              <span className="text-white font-sans font-bold lg:text-3xl text-xl">
                05
              </span>
              <p className="text-white lg:text-lg font-extralight">Hours</p>
            </div>
            <div className="bg-black lg:w-fit w-20  p-6 rounded-lg shadow-lg text-center">
              <span className="text-white font-sans font-bold lg:text-3xl text-xl">
                25
              </span>
              <p className="text-white lg:text-lg font-extralight">Min</p>
            </div>
            <div className="bg-black lg:w-fit w-20  p-6 rounded-lg shadow-lg text-center">
              <span className="text-white font-sans font-bold lg:text-3xl text-xl">
                59
              </span>
              <p className="text-white lg:text-lg font-extralight">Sec</p>
            </div>
          </div>
        </div>

        {/* Next content */}
        <div>
          <div className="bg-white p-2 lg:w-[500px] w-[350px] my-4 lg:h-96 h-60 lg:m-5 rounded-lg lg:flex lg:flex-col relative flex flex-row">
            {/* 25% OFF badge */}
            <h1 className="absolute top-3 right-3 text-lg font-semibold text-green-600">
              25% OFF
            </h1>

            <div className="flex mt-8">
              <img src={image12} alt="" className="lg:w-40" />
              <div className="flex flex-col justify-start lg:px-7 px-2">
                <h2 className="lg:text-2xl text-sm font-bold">
                  Ratan Tata A Complete Biography
                </h2>

                <p className="lg:text-lg text-xs font-light">
                  A complete biography of Ratan Tata — The Story of 1868 to 2021
                  | An authorized account of the Tata family and companies —
                  Industrialist, Philanthropist, Former Chairman of Tata Sons,
                  autobiography.
                </p>
                <button className="bg-[#fff1d6] text-blck  rounded-lg py-3 text-lg font-light hover:border-2 hover:bg-white  hover:text-black hover:border-black  ">
                  $669
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Next content */}
        <div>
          <div className="bg-white p-2 lg:w-[500px] w-[350px] lg:h-96 h-60 lg:m-5 rounded-lg lg:flex lg:flex-col relative flex flex-row">
            {/* 25% OFF badge */}
            <h1 className="absolute top-3 right-3 text-lg font-semibold text-green-600">
              30% OFF
            </h1>

            <div className="flex mt-8">
              <img src={image13} alt="" className="lg:w-36" />
              <div className="flex flex-col justify-start lg:px-7 px-2">
                <h2 className="lg:text-2xl  text-sm font-bold">
                  My Journey : Transforming Dreams into Actions
                </h2>

                <p className="lg:text-lg text-xs font-light">
                  A complete biography of Ratan Tata — The Story of 1868 to 2021
                  | An authorized account of the Tata family and companies —
                  Industrialist, Philanthropist, Former Chairman of Tata Sons,
                  autobiography.
                </p>
                <button className="bg-[#fff1d6] text-black  rounded-lg py-3 text-lg font-light hover:border-2 hover:bg-white  hover:text-black hover:border-black  ">
                  $999
                </button>
              </div>
            </div>

            <div className="flex justify-evenly"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifthlayout;
