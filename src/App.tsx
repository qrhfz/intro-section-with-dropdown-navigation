import { Drawer, DrawerProvider } from './components/Drawer'
import { Nav } from './components/Nav'


function App() {


  return (
    <DrawerProvider>
      <div className="App body-md text-grey-medium pb-24">
        <Nav></Nav>
        <div className="
        lg:main-grid
        lg:max-w-[1200px] lg:mx-auto 
        grid gap-12 lg:gap-32 lg:grid-cols-2
        mt-16">

          {/* hero */}
          <img className='hero | w-screen'
            src="/images/image-hero-mobile.png"
            alt="hero image"
            srcSet='/images/image-hero-mobile.png 750w,
            /images/image-hero-desktop.png 960w'
            sizes='(max-width: 1024px) 30vw, 100vw' />

          {/* headline */}
          <div className="headline | flex flex-col lg:justify-center items-center lg:items-start text-center lg:text-left px-1">
            <h1 className="heading-lg mb-4 text-black font-bold">
              Make remote work
            </h1>
            <p className='body-m mb-6'>
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
