import '../../css/Trusted.scss'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Trusted = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const listItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
      },
    }),
  };

  return (
    <section ref={ref}>
      <motion.p
        className='trusted-text'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        Trusted by teams at over 1,000 of the world's leading organizations
      </motion.p>

      <motion.ul
        className='trusted-imgs'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {['LogoWrapper.png', 'LogoWrapper-1.png', 'LogoWrapper-2.png', 'LogoWrapper-3.png', 'LogoWrapper-4.png', 'LogoWrapper-5.png', 'LogoWrapper-6.png'].map((src, index) => (
          <motion.li key={src} custom={index} variants={listItemVariants}>
            <img src={`assets/brands/${src}`} alt={`Brand ${index + 1}`} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Trusted;
