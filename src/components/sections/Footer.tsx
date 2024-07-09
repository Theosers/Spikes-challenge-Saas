import '../../css/Footer.scss'
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';


const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className='footer-main-container'>
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="contact-careers">
            <div className="contact">
              <h4>Contact</h4>
              <p>Work inquires: work@vaultflow.com</p>
              <p>PR and speaking: press@vaultflow.com</p>
              <p>New business: newbusiness@vaultflow.com</p>
            </div>
            <div className="careers">
              <h4>Careers</h4>
              <p>Careers@vaultflow.com</p>
            </div>
          </div>

          <div className="adress-social">
            <div className="adress">
              <h4>Adress</h4>
              <p>398 11th Street, Floor 2</p>
              <p>San Francisco, CA 94103</p>
            </div>
            <div className="social">
              <h4>Social</h4>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Tik Tok</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="copyright">© 2023 Vaultflow. All Rights Reserved.</span>

          <motion.img
            src="src/assets/logo_vaultflow.png"
            alt="Vaultflow Logo"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
            
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
