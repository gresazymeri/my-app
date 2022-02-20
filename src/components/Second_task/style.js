import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StylizedTab = styled.button`
  color: #444;
  width: 100%;
  padding: 20px 0px;
  font-size: .8rem;
  margin:1rem;
  border: none;
  background-color: transparent;
  border-bottom-color: #393e46;
  z-index:100;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #555;
      font-weight: 600;
      font-size: .75rem;      
      animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      border-bottom: 2px solid #2072EF;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 4rem;
  background: #f4f4f4;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

export const TabsHolder = styled.div`
  display: flex;
  /* can be used to stack them vertically by using column*/
  flex-direction: row;
  padding:.2rem 1rem;
  transition: width .2s;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const inactiveTab = {
  opacity: 0.65
};

// width, index,
/**
 * [0] [1] [2] ...
 * W * index
 *
 */
export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: none;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
            box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0);
            box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0);
  }
`;