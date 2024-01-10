import AuidioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import useMusicStore from '../store/useMusicStore';




import '/src/index.css'
function PlayBar() {
  const {image, name, artist, track} = useMusicStore()
  return (
    <div className="fixed bottom-0 text-white w-full flex flex-row ">
      <div className=' hidden bg-gray-0 w-[300px] px-5 md:flex md:flex-row justify-start items-center'>
        {
          image ? <img src={image} className=' h-16 w-16'/> : null
        }
        <div className=' flex flex-col px-2'>
        <strong>{name}</strong>
        <p>{artist}</p>
        </div>
      </div>
      <AuidioPlayer className='playbar bg-[#282828] text-white'
      autoPlay
      src={track}
      />
    </div>
  )
}

export default PlayBar