import React from "react";
import { ImageBackground, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
//utils & styles
import { style } from "./index.style";
import { setId } from "../../../redux/single.slice";
import { Props } from "./index.utils";
import { screensNames } from "../../../utils/screensNames";

const HorizontalListCard: React.FC<Props> = ({
  img,
  id,
  navigation,
  type = "offers",
  title,
}) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setId([type, id]));

    type === "places"
      ? navigation.navigate(screensNames.placeSingle)
      : navigation.navigate(screensNames.eventSingle);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <ImageBackground
        style={style.container}
        imageStyle={style.image}
        source={img ? { uri: img } : require("../../../../../assets/img/no_img.jpg")}
      >
        <Text style={style.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default HorizontalListCard;
