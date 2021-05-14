import { Image } from "react-konva";
import useImage from "use-image";
import React from 'react';

const Rover = React.forwardRef((props, ref) => {
  const [image] = useImage("http://localhost:3000/fuse.png");

  return <Image x={props.x} y={props.y} ref={ref} image={image} rotation={props.rotation} />;
});

export default Rover;
