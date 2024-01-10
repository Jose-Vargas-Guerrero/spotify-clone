import './App.css'
import Aside from './components/Aside'
import PlayBar from './components/PlayBar'
import Hero from '/src/components/Hero'


function App() {
  return (
    <>
      <div className=' h-full flex flex-row bg-black'>
      <Aside/>
      <Hero/>
      </div>
      <PlayBar/>
    </>
  )
}

export default App
