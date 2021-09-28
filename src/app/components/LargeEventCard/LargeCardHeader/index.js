import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
//utils & styles
import { Fontisto } from "@expo/vector-icons";
import { style } from "./index.style";
import { COLORS } from "../../../style/colors";
import { screensNames } from "../../../utils/screensNames";
import { useDispatch } from "react-redux";
import { setId } from "../../../redux/singleOffer.slice";

const LargeCardHeader = ({ title, navigation, id }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setId(id));
    navigation.navigate(screensNames.eventSingle);
  };
  
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
