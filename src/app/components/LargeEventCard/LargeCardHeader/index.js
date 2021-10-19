import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
//utils & styles
import { Fontisto } from "@expo/vector-icons";
import { style } from "./index.style";
import { COLORS } from "../../../style/colors";
import useId from "../../../hooks/useId";

const LargeCardHeader = ({ title, navigation, id, variant }) => {
  const setId = useId();

  const handlePress = () => setId(id, variant, navigation);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={style.box}>
        <Text style={style.title}>{title}</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
    </TouchableOpacity>
  );
};

export default LargeCardHeader;
