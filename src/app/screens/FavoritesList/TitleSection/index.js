import React from "react";
import { View, Text } from "react-native";

import { style } from "./index.style";

const TitleSection = ({ title, text = "", styles = {} }) => {
  return (
    <View style={[style.container, styles]}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

export default TitleSection;
