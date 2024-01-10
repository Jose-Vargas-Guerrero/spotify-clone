import { FaPlay } from "react-icons/fa";
import useMusicStore from "../store/useMusicStore";

// eslint-disable-next-line react/prop-types
function Card({image, name, artist,track}) {
  const {handleChangeTrack} = useMusicStore()

  const changeTrack = (image,name,artist,track) => {
    handleChangeTrack(image,name,artist,track)
  }
  return (
    <div className=" mx-auto relative h-auto w-[220px] bg-white bg-opacity-5 group hover:bg-opacity-10 transition ease-in-out duration-300 rounded-lg px-4 py-4 my-4 flex flex-col justify-center items-center">
      <img src={image} className=" max-h-[188px] max-w-[188px] min-h-[188px] min-w-[188px] rounded-lg" alt="Card Image" />
      <p className="w-full text-left text-white my-2">{name}</p>
      <p className="text-left w-full text-white">{artist}</p>
      <button
        className="flex py-4 px-4 absolute h-full w-[220px] transform translate-y-0 transition-all group-hover:translate-y-[-20px] opacity-0 group-hover:opacity-100 duration-200"
        onClick={() =>changeTrack(image,name,artist,track)}
      >
        <div className="bg-spotifygreen-0 px-3 py-3 rounded-full absolute right-6 bottom-16 shadow-md">
          <FaPlay className=" text-base"/>
        </div>
      </button>
    </div>
  );
}

export default Card
