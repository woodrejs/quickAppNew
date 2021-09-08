import React from "react";
import { ImageBackground, TouchableHighlight } from "react-native";

import { style } from "./index.style";

const HorizontalListCard = () => {
  return (
    <TouchableHighlight>
      <ImageBackground
        style={style.container}
        imageStyle={style.image}
        source={require("../../../../../assets/index_1.jpg")}
      />
    </TouchableHighlight>
  );
};
export default HorizontalListCard;
