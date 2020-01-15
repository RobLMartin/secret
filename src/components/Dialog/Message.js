import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Message = ({ delay = "2s", message }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true));

    return () => setShow(false);
  }, [message]);

  return (
    <Container listen={message} delay={delay}>
      <Text key={message}>{message}</Text>
    </Container>
  );
};

export default Message;

const Container = styled.div`
  opacity: ${p => (p.listen ? 1 : 0)};
  transition: opacity ${p => p.delay + " ease-in"};
  margin-right: auto;
`;

const Text = styled.p`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid ${p => p.theme.contrast}; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 1.5s steps(10, end), blink-caret 0.75s step-end infinite;
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
