import React from "react";
import { ImageBackground, TouchableHighlight } from "react-native";

import { style } from "./index.style";

const HorizontalListCard = ({ img }) => {
  return (
    <TouchableHighlight>
      <ImageBackground
        style={style.container}
        imageStyle={style.image}
        source={{ uri: img }}
      />
    </TouchableHighlight>
  );
};
export default HorizontalListCard;
