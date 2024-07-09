import { motion } from 'framer-motion';
import '../../css/Hero.scss'
import Button from '../features/Button';

const Hero = () => {
  return (
    <motion.div
      className='hero'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        className='moneyRaised'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We just raised $20M in Series B. Learn more
      </motion.span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Modern analytics<br /> for the modern world
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Suspendisse varius enim in eros elementum tristique.
      </motion.p>

      <motion.div
        className='button-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <Button text="Download the app" />
        <Button text="Talk to an expert" className="secondary" />
      </motion.div>

      <motion.img
        className='vaultFlow-img'
        src="src/assets/VaultFlow_Hero.png"
        alt="VaultFlow Hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      />
    </motion.div>
  );
};

export default Hero;
