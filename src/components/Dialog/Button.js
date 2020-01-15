import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${p => p.theme.paper};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  &:hover {
    background-color: ${p => p.theme.contrast};
  }
`;

const Reset = styled.button`
  background-color: ${p => p.theme.base};
  color: ${p => p.theme.contrast};
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  &:hover {
    background-color: ${p => p.theme.paper};
  }
`;

export { Button, Reset };
