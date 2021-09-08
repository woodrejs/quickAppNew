import React from "react";
import { View, Text } from "react-native";
//utils & styles
import { Props } from "./index.utils";
import { style } from "./index.style";

const CTASectionButton: React.FC<Props> = ({ title }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};
export default CTASectionButton;
