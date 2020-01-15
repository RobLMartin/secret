import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Answer = ({ answers, onClick = noop => noop }) => {
  return (
    <Container>
      {answers.map(a => (
        <Button
          key={a.option}
          variant="other"
          onClick={() => onClick(a.response)}
        >
          {a.option}
        </Button>
      ))}
    </Container>
  );
};

export default Answer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.1em;
`;
