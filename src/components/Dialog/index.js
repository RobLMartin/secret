import React, { useState } from "react";
import styled from "styled-components";
import Message from "./Message";
import { Reset } from "./Button";
import Answers from "./Answers";
const Dialog = ({ setPlay = noop => noop }) => {
  const [index, setIndex] = useState(0);
  const [temp, setTemp] = useState(null);
  const dialog = {
    0: {
      message: "Hello...",
      answers: [
        { option: "Is this Wilt Chamberland?", response: "1" },
        {
          option: "Is this the Krusty Krab?",
          response: "No, this is Robfella."
        },
        {
          option: "Zoot Suit Riot(riot!)",
          response: "Throw back a bottle of beer.."
        }
      ]
    },
    1: {
      message: "Do you have any bones that need collecting?",
      answers: [
        {
          option: "Bones? Weird thing to say...",
          response: "hmm.. Who are you?"
        },
        {
          option: "No but I have some Florida swamp land with your name on it!",
          response: "2"
        },
        {
          option: "What are you some kinda paleontologist?",
          response:
            "Ross was the worst character in friends, you can't change my mind.."
        }
      ]
    },
    2: {
      message: "Oh, Bert Farlander, you old so-and-so..",
      answers: [
        { option: "You thought I forgot... Never gonna.....", response: "fin" }
      ]
    }
  };

  const handleClick = response => {
    if (response === "fin") setPlay(true);
    if (dialog[response]) {
      setIndex(response);
    } else {
      setTemp(response);
    }
  };
  return (
    <Container>
      <Grid>
        <Message message={temp || dialog[index].message} />
        {!temp && (
          <Answers
            answers={dialog[index].answers}
            onClick={response => handleClick(response)}
          />
        )}
        <Reset
          onClick={() => {
            setIndex(0);
            setTemp(null);
          }}
        >
          Reset
        </Reset>
      </Grid>
    </Container>
  );
};

export default Dialog;

const Container = styled.div`
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  color: ${p => p.theme.font};
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
`;
