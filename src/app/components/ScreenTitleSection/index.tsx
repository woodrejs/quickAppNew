import React from "react";
import { View, Text } from "react-native";

import { Props } from "./index.utils";
import { style } from "./index.style";

const ScreenTitleSection: React.FC<Props> = ({ title, text }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

export default ScreenTitleSection;
