import React, { useState } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
//utils & styles
import { COLORS } from "../../../style/colors";
import { Props } from "./index.utils";
import { style } from "./index.style";

import { deleteFavorite, createFavorite } from "../../../utils/strapi";
import { setFavorites } from "../../../redux/user.slice";
import { useSelector, useDispatch } from "react-redux";

const CTASectionIconButton: React.FC<Props> = ({
  variant,
  data = null,
  selected = false,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);

  const dispatch = useDispatch();
  const { black, white, lightExtra } = COLORS;

  const handlePress = async () => {
    if (variant === "heart") {
      if (isSelected) {
        try {
          await deleteFavorite(data.id, jwt);
          const filteredData = favorites.filter((item) => item.uid !== data.id);
          dispatch(setFavorites(filteredData));
          setIsSelected(false);
        } catch (error) {
          console.log({ message: error });
        }
      } else {
        try {
          const resp = await createFavorite(data, jwt);
          dispatch(setFavorites([...favorites, resp]));
          setIsSelected(true);
        } catch (error) {
          console.log({ message: error });
        }
      }
    }
  };

  return (
    <View style={[style.container, { backgroundColor: isSelected ? lightExtra : white }]}>
      {variant === "heart" && (
        <AntDesign
          name="heart"
          size={20}
          color={isSelected ? white : black}
          onPress={handlePress}
        />
      )}
      {variant === "phone" && (
        <Entypo name="phone" size={26} color={isSelected ? white : black} />
      )}
    </View>
  );
};

export default CTASectionIconButton;
