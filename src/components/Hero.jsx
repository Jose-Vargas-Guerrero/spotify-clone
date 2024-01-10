import Card from "./Card"
import listOfTracks from "./list"

function Hero() {
  return (
    <div className="w-screen h-auto py-20 bg-gradient-to-t from-lightblack-0 from-80% to-lightgray-0">
      <div className="  py-6 px-12">
        <h2 className=" text-center lg:text-left text-white font-sans font-bold text-[2rem]">Spotify songs</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-auto sm:mx-auto px-10">
        {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-auto sm:mx-auto gap-3 px-10">

 */}
        {
          listOfTracks.map((track) => <Card key={track.name} image={track.image} name={track.name}
          artist={track.artist} track={track.track}/>)
        }
      </div>
    </div>
  )
}

export default Hero