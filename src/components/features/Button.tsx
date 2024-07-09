import React from 'react';
import '../../css/features/Button.scss';
import { motion } from 'framer-motion';


interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`button ${className}`}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
