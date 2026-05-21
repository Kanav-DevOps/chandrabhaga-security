import { motion } from "framer-motion";

function Reveal({ children }) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;