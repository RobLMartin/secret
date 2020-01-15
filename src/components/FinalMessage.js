import React, { useEffect } from "react";
import styled from "styled-components";

const FinalMessage = ({ message = "Happy Birthday, Bobby Ray Cornn Jr!" }) => {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
};

export default FinalMessage;

const Container = styled.div`
  position: absolute;
  top: 50vh;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;
const Text = styled.p`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid ${p => p.theme.contrast}; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 1.5s steps(10, end), blink-caret 0.75s step-end infinite;
  font-size: 4rem;
  color: white;
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${p => p.theme.contrast};
    }
  }
`;
