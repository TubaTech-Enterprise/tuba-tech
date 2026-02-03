import styled, { keyframes } from "styled-components";

export default function BubblesOverlay({ amount = 15 }) {
    return (
        <Overlay>
            {Array.from({ length: amount }).map((_, index) => (
                <Bubble key={index} index={index + 1}>
                    <Dot />
                </Bubble>
            ))}
        </Overlay>
    );
}

const float = keyframes`
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
    opacity: 0;
  }
  50% {
    transform: scale(0.8) translateY(-100px) rotate(180deg);
    opacity: 0.3;
  }
  100%  {
 transform: scale(1) translateY(-180px) rotate(360deg);
    opacity: 0.1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none; /* não bloqueia cliques */
  overflow: hidden;
  z-index: 2;
`;

const Bubble = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid var(--secondary-color);
  border-radius: 50%;

  animation: ${float}
    ${({ index }) => 4 + (index % 7)}s linear infinite;

  top: ${({ index }) => (index * 11) % 100}%;
  left: ${({ index }) => (index * 17) % 100}%;
`;

const Dot = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  top: 20%;
  right: 20%;
`;
