import React from "react";
import { ImageBackground, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
//utils & styles
import { style } from "./index.style";
import { setId as setPlaceId } from "../../../redux/singlePlace.slice";
import { setId as setOfferId } from "../../../redux/singleOffer.slice";
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
    if (type === "places") {
      dispatch(setPlaceId(id));
      navigation.navigate(screensNames.placeSingle);
    } else if (type === "offers") {
      dispatch(setOfferId(id));
      navigation.navigate(screensNames.eventSingle);
    }
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
