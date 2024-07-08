import '../../css/Features.css'
const Features = () => {

    return (
      <>
        <section className='Features'>
          <h2>Features that<br />
              work for your<br />
              future.<br />
          </h2>

          <p className='features-subtitle'>Check out our amazing features and experience the <br />
             power of Vaultflow for yourself.
          </p>

          <div className="boxes">
            <div className="box">
              <img src="src/assets/analytics.png" alt="" className='img-features'/>
              <h3>Analytics Dashboard</h3>
              <p>Our Analytics Dashboard provides a clear and intuitive interface <br />
                 for you to easily analyze your data. From customizable graphs to <br />
                 real-time data updates, our dashboard offers everything you <br />
                 need to gain valuable insights.</p>
              <a href="#">View dashboard</a>
              
            </div>
            <div className="box">
              <img src="src/assets/credit_token.png" alt="" className='img-features'/>
              <h3>Digital Credit Tokens</h3>
              <p>Reward your customers and incentivize engagement with our <br />
                 innovative digital credit tokens. Our tokens can be customized to <br />
                 match your branding, and are a flexible and scalable way to drive <br />
                 customer loyalty and encourage repeat business.</p>
              <a href="#">View tokens</a>
            </div>
          </div>

          <div className="box large-box">
            <div className="left-content">
              <img src="src/assets/code_collaboration.png" alt="" className='img-features' />
              <h3>Code collaboration</h3>
              <p>Our advanced code synchronization technology ensures that <br />
                 your data is always up-to-date and accurate, no matter where it's <br />
                 coming from. Whether you're integrating data from multiple <br />
                 sources or working with a team of developers, our <br />
                 synchronization technology makes it easy to collaborate and <br />
                 ensure that your data is consistent and reliable.</p>
              <a href="#">View code collaboration</a>
        
            </div>
            <img src="src/assets/digital_token.png" alt="" className="right-content" />

          </div>
          <div className="box other-large-box">
              <h2>Our powerful analytics <br />
                  provides invaluable insights.</h2>
              <p>Unlock the power of data with our cutting-edge analytics product. Get instant <br />
                 insights with our user-friendly Analytics Dashboard, and take advantage of our <br />
                 innovative digital credit tokens to reward your customers and incentivize <br />
                 engagement. </p>
              <button>Download the app</button>
          </div>

        </section>
      </>
    )
  }
  
  export default Features
  