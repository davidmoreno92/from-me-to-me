import React from "react";
import ReactPlayer from "react-player/lazy";

type Props = {
  url: string;
};

const Player = ({ url }: Props): JSX.Element => {
  return <ReactPlayer url={url} controls width="auto" height="auto" />;
};

export default Player;
