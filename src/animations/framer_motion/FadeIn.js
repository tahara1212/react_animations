/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const FadeIn = () => {
  return (
    <SContainer
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 5 }}
    ></SContainer>
  );
};

const colorRed = css`
  font-size: 20px;
  color: red;
`;

const SContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: violet;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
