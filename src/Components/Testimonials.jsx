import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [image, showImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      showImage((image) => (image >= 3 ? 1 : image + 1)); // Reset to 1 after reaching 4
    }, 2000);
    return () => clearInterval(interval);
    // Clean up the interval on component unmount
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-10 items-center mt-[100px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-green-400">TESTIMONIALS</h1>
          <h1 className="text-2xl">
            {" "}
            Here's what students <br /> are saying{" "}
          </h1>
        </div>
        <div>
          <div
            onClick={function () {
              showImage(1);
            }}
            style={{ display: image == 1 ? "block" : "none" }}
            className="bg-[#0a3d62] p-8 rounded-2xl"
          >
            <p className="bg-[#0a3d62]">
              I chose ALLEN Online Programs <br /> because I wanted to balance
              my <br /> NEET prep with my school <br /> schedule. The program's{" "}
              <br /> structure, from daily homework to <br /> post-class
              handouts, was well <br />
              -organized & my teachers were <br /> always available in case I
              had any <br /> doubts.
            </p>
            <div className="flex bg-[#0a3d62] items-center mt-16">
              {" "}
              {/* Added flex for alignment */}
              <img
                className="rounded-[50px] w-[40px]"
                src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=64&q=100"
                alt=""
              />
              <div className="ml-2 bg-[#0a3d62]">
                {" "}
                {/* Added margin for spacing */}
                <h1 className="bg-[#0a3d62] ">PARHT SONAR</h1>
                <p className="bg-[#0a3d62] ">NEET-UG 2024, Score</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10 items-center mt-[100px]">
          <div
            onClick={function () {
              showImage(2);
            }}
            style={{ display: image == 2 ? "block" : "none" }}
            className="bg-[#0a3d62] p-8 rounded-2xl"
          >
            <p className="bg-[#0a3d62]">
              I wanted to stay with my <br /> family while preparing for JEE,
              <br /> so I chose ALLEN Online Programs. <br /> The faculty was
              great & <br /> the live classes, daily <br /> homework & test
              series helped <br /> me secure a great score & <br /> rank!
            </p>
            <div className="flex bg-[#0a3d62] items-center mt-16">
              {" "}
              {/* Added flex for alignment */}
              <img
                className="rounded-[50px] w-[40px]"
                src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=64&q=100"
                alt=""
              />
              <div className="ml-2 bg-[#0a3d62]">
                {" "}
                {/* Added margin for spacing */}
                <h1 className="bg-[#0a3d62] ">SARTH PATIL</h1>
                <p className="bg-[#0a3d62] ">NEET-UG 2024, Score</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10 items-center mt-[100px]">
          <div
            onClick={function () {
              showImage(3);
            }}
            style={{ display: image == 3 ? "block" : "none" }}
            className="bg-[#0a3d62] p-8 rounded-2xl"
          >
            <p className="bg-[#0a3d62]">
              I took NEET in 2023 but <br /> didn’t achieve my desired score,{" "}
              <br /> so I reattempted in 2024 with <br /> ALLEN Online Programs.
              The top-quality <br /> faculty, study material, & personalised{" "}
              <br /> experience on the ALLEN app <br /> helped me improve my
              score <br /> by 100 marks from my previous <br /> attempt.
            </p>
            <div className="flex bg-[#0a3d62] items-center mt-16">
              {" "}
              {/* Added flex for alignment */}
              <img
                className="rounded-[50px] w-[40px]"
                src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=64&q=100"
                alt=""
              />
              <div className="ml-2 bg-[#0a3d62]">
                {" "}
                {/* Added margin for spacing */}
                <h1 className="bg-[#0a3d62] ">SHUBHAM MORE</h1>
                <p className="bg-[#0a3d62] ">NEET-UG 2024, Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <img className="ml-auto mr-auto w-[1000px]" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729668504/download_app_light_mode_uzncho.webp" alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
