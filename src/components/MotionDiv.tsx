import { FADE } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function MotionDiv({ children }: Props) {
  return (
    <motion.div
      variants={FADE}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
