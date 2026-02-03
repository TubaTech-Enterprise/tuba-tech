import styled from "styled-components";

export default function WaveSeparator() {
  return (
    <Wrapper>
      <Waves className="back">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path
              id="wave"
              d="M-160 44c30 0 58-18 88-18s
                 58 18 88 18 58-18 88-18
                 58 18 88 18 v44h-352z"
            />
          </defs>
          <use href="#wave" x="48" y="5" />
          <use href="#wave" x="48" y="7" />
        </svg>
      </Waves>

      <Waves className="front">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none">
          <use href="#wave" x="48" y="0" />
          <use href="#wave" x="48" y="3" />
        </svg>
      </Waves>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;
`;

const Waves = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  
  svg {
    width: 100%;
    height: 100%;
  }

  use {
    animation: waveMove 10s cubic-bezier(.55,.5,.45,.5) infinite;
    fill: var(--secondary-color);
    opacity: 0.7;
  }

  &.back {
    z-index: 1;

    use:nth-child(2) {
      animation-duration: 14s;
      opacity: 0.4;
    }
  }

  &.front {
    z-index: 2;

    use:nth-child(2) {
      animation-duration: 7s;
      opacity: 0.8;
    }
  }

  @keyframes waveMove {
    0% {
      transform: translateX(-90px);
    }
    100% {
      transform: translateX(85px);
    }
  }
`;
