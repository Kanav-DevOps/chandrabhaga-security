import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Loader() {

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        flexDirection: "column",
      }}
    >

      <motion.img
        src={logo}
        alt="logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          width: "120px",
          marginBottom: "30px",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
        style={{
          fontSize: "42px",
          fontWeight: "800",
          color: "white",
        }}
      >
        Chandrabhaga Security
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 220 }}
        transition={{
          delay: 0.8,
          duration: 1.5,
        }}
        style={{
          height: "4px",
          background: "#2563eb",
          marginTop: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(37,99,235,0.5)",
        }}
      />

    </motion.div>
  );
}

export default Loader;