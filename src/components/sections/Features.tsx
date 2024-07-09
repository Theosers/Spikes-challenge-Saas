import '../../css/Features.scss'
import Button from '../features/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='Features' ref={ref}>
      <motion.h2
        className='features-title'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        Features that<br />
        work for your<br />
        future.<br />
      </motion.h2>

      <motion.p
        className='features-subtitle'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        Check out our amazing features and experience the <br />
        power of Vaultflow for yourself.
      </motion.p>

      <div className="boxes">
        <motion.div
          className="box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <img src="assets/analytics.png" alt="" className='img-features'/>
          <h3>Analytics Dashboard</h3>
          <p>Our Analytics Dashboard provides a clear and intuitive interface <br />
            for you to easily analyze your data. From customizable graphs to <br />
            real-time data updates, our dashboard offers everything you <br />
            need to gain valuable insights.</p>
          <a href="#">View dashboard</a>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <img src="assets/credit_token.png" alt="" className='img-features'/>
          <h3>Digital Credit Tokens</h3>
          <p>Reward your customers and incentivize engagement with our <br />
            innovative digital credit tokens. Our tokens can be customized to <br />
            match your branding, and are a flexible and scalable way to drive <br />
            customer loyalty and encourage repeat business.</p>
          <a href="#">View tokens</a>
        </motion.div>
      </div>

      <motion.div
        className="box large-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <div className="left-content">
          <img src="assets/code_collaboration.png" alt="" className='img-features' />
          <h3>Code collaboration</h3>
          <p>Our advanced code synchronization technology ensures that <br />
            your data is always up-to-date and accurate, no matter where it's <br />
            coming from. Whether you're integrating data from multiple <br />
            sources or working with a team of developers, our <br />
            synchronization technology makes it easy to collaborate and <br />
            ensure that your data is consistent and reliable.</p>
          <a href="#">View code collaboration</a>
        </div>
        <span className="right-content">
          <img src="assets/digital_token.png" alt="" />
        </span>
      </motion.div>
      <motion.div
        className="box other-large-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 2.5, duration: 2 }}
      >
        <h2 className='powerful-analytics-title'>Our powerful analytics <br />
          provides invaluable insights.
        </h2>
        <p>Unlock the power of data with our cutting-edge analytics product. Get instant <br />
          insights with our user-friendly Analytics Dashboard, and take advantage of our <br />
          innovative digital credit tokens to reward your customers and incentivize <br />
          engagement.
        </p>
        <Button text="Download the app" />
      </motion.div>
    </section>
  );
};

export default Features;
