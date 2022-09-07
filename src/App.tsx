import { Drawer, DrawerProvider } from './components/Drawer'
import { Nav } from './components/Nav'


function App() {


  return (
    <DrawerProvider>
      <div className="App body-md text-grey-medium">
        <Nav></Nav>
        <Drawer></Drawer>
        <img className='w-screen' src="/images/image-hero-mobile.png" alt="hero image" />
        <div className="mt-12">
          <h1 className="lg:heading-lg text-center mb-4 text-black font-bold">
            Make remote work
          </h1>
          <p className='body-m mb-6'>
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className='bg-black text-white'>
            Learn more
          </button>
        </div>
      </div>
    </DrawerProvider>
  )
}

export default App
