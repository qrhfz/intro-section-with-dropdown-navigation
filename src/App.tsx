import { Drawer, DrawerProvider } from './components/Drawer'
import { Nav } from './components/Nav'


function App() {

  return (
    <DrawerProvider>
      <div className="App body-md text-grey-medium pb-24">
        <Nav></Nav>
        <div className="
        grid gap-12 lg:gap-x-32 lg:gap-y-0
        lg:main-grid
        lg:max-w-[1145px] lg:mx-auto 
        mt-16">

          {/* hero */}
          <div className="hero">
            <img
              src="/images/image-hero-mobile.png"
              alt="hero image"
              srcSet='/images/image-hero-mobile.png 750w,
            /images/image-hero-desktop.png 960w'
              sizes='(max-width: 1024px) 30vw, 100vw' />
          </div>

          {/* headline */}
          <div className="headline | flex flex-col 
                          lg:gap-12 lg:justify-center 
                          items-center lg:items-start
                          px-4 lg:p-0
                          text-center lg:text-left
                          ">
            <h1 className="heading-lg text-black font-bold">
              Make remote work
            </h1>
            <p className='body-m mb-1 max-w-[50ch]'>
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <button className='btn-2 hover:btn-1'>
              Learn more
            </button>
          </div>

          {/* sponsor */}
          <div className="sponsor | flex flex-row justify-between items-center px-4 gap-7">
            <a href="#">
              <img src="/images/client-databiz.svg" alt="Databiz" />
            </a>
            <a href="#">
              <img src="/images/client-audiophile.svg" alt="Audiophile" />
            </a>
            <a href="#">
              <img src="/images/client-meet.svg" alt="Meet" />
            </a>
            <a href="#">
              <img src="/images/client-maker.svg" alt="Maker" />
            </a>
          </div>
        </div>
      </div>
      <Drawer></Drawer>
    </DrawerProvider>
  )
}

export default App
