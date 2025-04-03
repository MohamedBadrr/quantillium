import { motion, useInView } from "framer-motion";
import * as React from "react";
import { usePreloaderStore } from "@/stores/preloaderStore";
import { cn } from "@/lib/utils";

const Fade = ({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  childClassName = "",
  as,
  childAs,
  onClick,
}: {
  direction: "up" | "down" | "left" | "right";
  children: React.ReactNode;
  className?: string;
  childClassName?: string;
  staggerChildren?: number;
  as?: React.ElementType;
  childAs?: React.ElementType;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const FADE_UP = {
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
    hidden: { opacity: 0, y: 18 },
  };

  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
    hidden: { opacity: 0, y: -18 },
  };

  const FADE_LEFT = {
    show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
    hidden: { opacity: 0, x: 18 },
  };

  const FADE_RIGHT = {
    show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
    hidden: { opacity: 0, x: -18 },
  };

  const isPreloaderVisible = usePreloaderStore(
    (state) => state.isPreloaderVisible
  );
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Choose the correct animation based on the direction prop
  const variants =
    direction === "up"
      ? FADE_UP
      : direction === "down"
      ? FADE_DOWN
      : direction === "left"
      ? FADE_LEFT
      : FADE_RIGHT;

  // Dynamically determine the motion component
  const MotionComponent = as ? motion(as) : motion.div;
  const ChildMotionComponent = childAs ? motion(childAs) : motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={!isPreloaderVisible && isInView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
      onClick={onClick}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <ChildMotionComponent
            variants={variants}
            className={cn("max-w-full", childClassName)}
          >
            {child}
          </ChildMotionComponent>
        ) : (
          child
        )
      )}
    </MotionComponent>
  );
};

export default Fade;
