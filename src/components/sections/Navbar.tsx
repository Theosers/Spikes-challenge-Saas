import '../../css/Navbar.scss'
import Button from '../features/Button'
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="assets/logo_vaultflow.png"
        alt="Vaultflow Logo"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      <ul>
        {['Features', 'Pricing', 'About us'].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: '#ececec' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      <Button text="Download the app" />
    </motion.nav>
  );
};

export default Navbar;
