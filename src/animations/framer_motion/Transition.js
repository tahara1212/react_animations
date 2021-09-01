/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Transition = () => {
  return (
    <SContainer
      animate={AnimateDefault}
      transition={TransitionDefault}
    ></SContainer>
  );
};

const SContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: violet;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%); */
`;

const AnimateDefault = {
  rotate: 180,
};

const TransitionDefault = {
  type: "inertia",
  velocity: 50,
};

const Spring = {
  type: "spring",
  duration: 2,
  // 弾み
  //   bounce: 0.8,
  stiffness: 10,
};

const Repeat = {
  repeat: Infinity,
  repeatDelay: 1,
  duration: 2,
  ease: "linear",
  //   ease: "easeIn",
  //   ease: "easeOut",
  //   ease: "easeInOut",
  //   ease: "circIn",
  //   ease: "circOut",
  //   ease: "circInOut",
  //   ease: "backIn",
  //   ease: "backOut",
  //   ease: "backInOut",
  //   ease: "anticipate",
};

const From = {
  from: 20,
  duration: 2,
  repeat: Infinity,
};

// 時間
const TimesAnimate = {
  scale: [0, 1, 0.5, 1],
};

const TimesTransition = {
  times: [0, 0.1, 0.9, 1],
};
