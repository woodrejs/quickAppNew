import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { style } from "./index.style";
import { Props } from "./index.utils";

const HeaderIcon: React.FC<Props> = ({ press }) => {
  return (
    <TouchableWithoutFeedback onPress={press}>
      <View style={style.box}>
        <AntDesign name="user" size={24} color="#616161" />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default HeaderIcon;
