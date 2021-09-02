/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Circle = () => {
       return (
              <SVG width="720" height="720">
                     <SCircle cx="360" cy="360" r="260" />
              </SVG>
       )
}

const SVG = styled.svg`
       transform: rotate(-90deg);
`
const KC = keyframes`
  0% { stroke-dasharray: 0 2261; }
  99.9%,to { stroke-dasharray: 2261 2261; }
`
const SCircle = styled.circle`
    fill: transparent;
    stroke: #df4f4f;
    stroke-width: 1;
    animation: ${KC} 3s infinite;
`

