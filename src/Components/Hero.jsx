import React, { useEffect, useState } from "react";
import mobile from '../assets/mobile.svg'
import mobile2 from "../assets/mobile2.svg";
import mobile3 from "../assets/mobile3.svg";
const Hero = () => {
  const [image, setImage] = useState(0);
  const [jee, setJee] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image) => (image >= 4 ? 1 : image + 1)); // Reset to 1 after reaching 4
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setJee((jee) => (jee >= 2 ? 1 : jee + 1)); // Reset to 1 after reaching 4
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
        <div className="text-white flex justify-center items-center mt-[130px]">
      <div
        style={{ display: image == 1 ? "block" : "none" }}
        onClick={function () {
          setImage(1);
        }}
      >
        <img
          className="w-[950px]"
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729680516/Homepage_Banner_1_grtip1.png"
          alt=""
        />
      </div>
      <div
        style={{ display: image == 2 ? "block" : "none" }}
        onClick={function () {
          setImage(2);
        }}
      >
        <img
          className="w-[950px]"
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp"
          alt=""
        />
      </div>

      <div
        style={{ display: image == 3 ? "block" : "none" }}
        onClick={function () {
          setImage(3);
        }}
      >
        <img
          className="w-[950px]"
          src=" https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp"
          alt=""
        />
      </div>
      <div
        style={{ display: image == 4 ? "block" : "none" }}
        onClick={function () {
          setImage(4);
        }}
      >
        <img
          className="w-[950px]"
          src=" https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944598/wr9qyk4gyqgnntgonfvy.webp?_upload_ref=ic_img_tool"
          alt=""
        />
      </div>
    </div>
        <div className="mt-[120px] text-5xl font-bold text-center">
        Our remarkable results in 2024
        </div>
       
    <div className="mt-[120px]">
       <div  style={{display: jee==1? "block":"none"}} onClick={function(){
            setJee(1)
        }}>
       <div  className="flex items-center justify-center gap-8">
            <img className="rounded-2xl w-[400px]" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool" alt="" />
            <div>
                <h1 className="text-2xl font-bold">Allen Online Programs JEE(Adv.) <br /> 2024 Results </h1>
                <p className="text-slate-400 mt-[10px]">14 students have made it to the top 500 AIR</p>
                <button className="mt-[40px] text-blue-600 font-bold">View Detailed Results</button>
            </div>
        </div>
       </div>
        <div   style={{display: jee==2? "block":"none"}} onClick={function(){
            setJee(2)
        }}>
        <div className="flex items-center justify-center gap-8">
            <img className="rounded-2xl w-[400px]"  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953193/hbdu8gunuoob1rwhfnyy.png?_upload_ref=ic_img_tool" alt="" />
            <div>
                <h1 className="text-2xl font-bold">Allen Online Programs NEET(UG.) <br /> 2024 Results </h1>
                <p  className="text-slate-400 mt-[10px]">24 students have scored 700+</p>
                <button className="mt-[40px] text-blue-600 font-bold">View Detailed Results</button>
            </div>
        </div>
        </div>
    </div>
    <div className="text-2xl mt-[100px] font-bold text-center">
    ALLEN App Advantage
    </div>

    <div className=" mt-[80px]">
    <div className="flex justify-center gap-4 items-center">
        <div>
            <h1 className="text-2xl font-semibold">Achieve your dreams <br /> with the ALLEN App!</h1>
            <p className="mt-[20px] text-slate-400">Top Kota faculty, customised <br /> study tools, and AI-powered <br /> learning—all in one app.</p>
            <p className="text-slate-200 font-light text-[12px] mt-[20px]">*All impact methodology & <br />measurement validated by</p>
        </div>
        <div className="flex ">
            <img src={mobile} alt="" />
            <img src={mobile2} alt="" />
            <img src={mobile3} alt="" />
        </div>
    </div>
    </div>
    <div>
        <div className="text-2xl font-bold mt-[100px] ml-[270px]">Discover the perfect online program</div>
        <div className="border-2 z-10 inline-block rounded-lg border-blue-200 z-10">
            <h1 className="text-2xl">JEE</h1>
            <div className="flex justify-between ">
              <button>View</button>
              <img  className="w-[200px] " src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp" alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero;
