import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";

import { style } from "./index.style";
import { Props } from "./index.utils";

const HeaderButton: React.FC<Props> = ({ press }) => {
  return (
    <TouchableWithoutFeedback onPress={press}>
      <View style={style.box}>
        <View style={style.sphere} />
        <View style={style.sphere} />
        <View style={style.sphere} />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default HeaderButton;
