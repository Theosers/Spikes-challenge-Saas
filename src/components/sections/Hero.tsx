import '../../css/Hero.css'

const Hero = () => {

    return (
      <>
        <div className='hero'>
          <span>We just raised $20M in Series B. Learn more</span>
          <h1>Modern analytics<br></br> for the modern world</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Suspendisse varius enim in eros elementum tristique.</p>

          <div className='button-container'>
            <button>Download the app</button>
            <button>Talk to an expert</button>
          </div>

          <img className='vaultFlow-img' src="src/assets/VaultFlow_Hero.png" alt="" />
          
        </div>
      </>
    )
  }
  
  export default Hero
  