import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashProps {
  onFinish: () => void;
}

export default function Splash({ onFinish }: SplashProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500); // 1.5s for animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
        {show && (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1
            className="text-5xl font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            David Salas
            </motion.h1>
        </motion.div>
        )}
    </AnimatePresence>
    );
}