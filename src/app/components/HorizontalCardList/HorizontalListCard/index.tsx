import React from "react";
import { ImageBackground, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
//utils & styles
import { style } from "./index.style";
import { Props } from "./index.utils";
import useId from "../../../hooks/useId";

const HorizontalListCard: React.FC<Props> = ({
  img,
  id,
  navigation,
  type = "offers",
  title,
}) => {
  const setId = useId();

  const handlePress = () => setId(id, type, navigation);

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
