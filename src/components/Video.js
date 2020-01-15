import React from "react";
import styled from "styled-components";

const Video = ({ play = false }) => {
  return (
    <>
      {play && (
        <IFrame
          src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        ></IFrame>
      )}
    </>
  );
};

export default Video;

const IFrame = styled.iframe`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
