import './App.scss'
import Hero from './components/sections/Hero'
import Navbar from './components/sections/Navbar'
import Features from './components/sections/Features'
import Footer from './components/sections/Footer'
import Trusted from './components/sections/Trusted'
function App() {

  return (
    <>
      <Navbar />
      <div className='main'>
        <Hero />
        <Trusted/>
        <Features />
        <Footer />
      </div>
    </>
  )
}

export default App
