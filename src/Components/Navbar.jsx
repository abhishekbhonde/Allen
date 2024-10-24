import { Link } from "react-router-dom";
import call from "../assets/call.png";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center text-white justify-around mt-[25px]">
        <div className="flex">
          <ul className="flex gap-[25px]">
            <li>
              <Link to="/exams">Exams</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/scholarship">Scholarships</Link>
            </li>
            <li className="relative">
              <Link to="/test-series">TestSeries</Link>
              <span className="p-[1px] bg-yellow-400 text-black text-[12px] rounded-tr-md rounded-br-md absolute rounded-tl-md mt-[-10px]">New</span>
            </li>
            <li className="ml-[13px]">
              <Link to="/study-materials">StudyMaterials</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="flex bg-white h-[35px] items-center p-[8px] gap-2 rounded-[50px]">
            {/* <img className="w-[12px]" src={call} alt="" /> */}
            <button className="text-black text-[15px] text-center font-normal">Talk to us</button>
          </div>
          <Link to="/login">
            <button className="ml-[20px] p-[8px] h-[35px] text-[15px] flex items-center rounded-[50px] border-2 border-white">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
