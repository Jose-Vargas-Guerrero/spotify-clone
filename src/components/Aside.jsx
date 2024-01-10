import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoIosHeartHalf } from "react-icons/io";
import { PiApplePodcastsLogoLight } from "react-icons/pi";

function Aside() {
  return (
    <div className="hidden lg:bg-blackground-0 lg:w-[301px] lg:h-screen lg:flex lg:flex-col lg:justify-start lg:px-4 lg:py-10">
      <div className=" font-sans text-white flex flex-row  items-center">
        <FaSpotify className=" text-[3rem] mx-3" />
        <h2 className=" text-[1.6rem] font-bold">Spotify</h2>
      </div>
      <div className=" text-white flex flex-col font-sans py-8">
        <span className=" mx-2 my-2 px-4 py-2 flex flex-row items-center cursor-pointer text-[1.30rem]
         rounded-lg hover:bg-gray-0 transition ease-in duration-150">
          <GoHomeFill />
          <p className=" mx-1">Home</p>
        </span>
        <span className=" mx-2 my-2 px-4 py-2 flex flex-row items-center cursor-pointer text-[1.30rem]
         rounded-lg hover:bg-gray-0 transition ease-in duration-150">
          <FiSearch/>
          <p className=" mx-1">Search</p>
        </span>
        <span className=" mx-2 my-2 px-4 py-2 flex flex-row items-center cursor-pointer text-[1.30rem]
         rounded-lg hover:bg-gray-0 transition ease-in duration-150">
          <BiLibrary/>
          <p className=" mx-1">Your Library</p>
        </span>
      </div>
      {/* second items */}
      <div className=" text-white flex flex-col font-sans py-2">
        <span className=" mx-2 my-2 px-4 py-2 flex flex-row items-center cursor-pointer text-[1.30rem]
         rounded-lg hover:bg-gray-0 transition ease-in duration-150">
          <FaRegSquarePlus/>
          <p className=" mx-1">Create Playlist</p>
        </span>
        <span className=" mx-2 my-2 px-4 py-2 flex flex-row items-center cursor-pointer text-[1.30rem]
         rounded-lg hover:bg-gray-0 transition ease-in duration-150">
          <IoIosHeartHalf/>
          <p className=" mx-1">Liked Songs</p>
        </span>
        <span className=" mx-2 my-2 px-4 py-2 flex flex-row items-center cursor-pointer text-[1.30rem]
         rounded-lg hover:bg-gray-0 transition ease-in duration-150">
          <PiApplePodcastsLogoLight/>
          <p className=" mx-1">Your Episodes</p>
        </span>
      </div>
    </div>
  );
}

export default Aside;
