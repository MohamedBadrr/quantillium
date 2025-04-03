import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePreloaderStore } from "@/stores/preloaderStore";
import logo from "@/assets/logo.gif";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const setPreloaderVisible = usePreloaderStore(
    (state) => state.setPreloaderVisible
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setPreloaderVisible(false); // Update global state when animation starts to fade out
    }, 2200);

    return () => clearTimeout(timer);
  }, [setPreloaderVisible]);

  return (
    shouldRender && (
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-[9999999999999]"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onAnimationComplete={() => !isLoading && setShouldRender(false)}
      >
        <div className="loader flex items-center justify-center">
          {shouldRender && (
            <img src={`${logo}?nocache=${new Date()}`} width={170} alt="Logo" />
          )}
        </div>
      </motion.div>
    )
  );
};

export default Preloader;
