//refacto utils ---> algo direction

export const handleDirection = (orientation, direction) => {
  console.log(orientation, direction);

  switch (orientation) {
    case "N":
      if (direction === "right") {
        return { rotate: true, value: 90, state: "E" };
      } else if (direction === "left") {
        return { rotate: true, value: -90, state: "W" };
      } else if (direction === "forward") {
        return { rotate: false, value: 0, state: "N" };
      } else if (direction === "down") {
        return { rotate: true, value: 180, state: "S" };
      }
      break;

      case "S":
        if (direction === "down") {
          return { rotate: false, value: 0, state: "S" };
        } else if (direction === "left") {
          return { rotate: true, value: -90, state: "W" };
        } else if (direction === "forward") {
          return { rotate: true, value: 0, state: "N" };
        } else if (direction === "right") {
          return { rotate: true, value: 90, state: "E" };
        }
        break;

    case "E":
      if (direction === "right") {
        return { rotate: false, value: 0, state: "E" };
      } else if (direction === "left") {
        return { rotate: true, value: -90, state: "W" };
      } else if (direction === "forward") {
        return { rotate: true, value: 0, state: "N" };
      } else if (direction === "down") {
        return { rotate: true, value: 180, state: "S" };
      }
      break;

      case "W":
        if (direction === "left") {
          return { rotate: false, value: 0, state: "W" };
        } else if (direction === "right") {
          return { rotate: true, value: 90, state: "E" };
        } else if (direction === "forward") {
          return { rotate: true, value: 0, state: "N" };
        } else if (direction === "down") {
          return { rotate: true, value: 180, state: "S" };
        }
        break;


    default:


      break;
  }
};
