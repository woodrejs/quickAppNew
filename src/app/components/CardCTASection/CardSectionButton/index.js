import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";
import useFavorites from "../../../hooks/useFavorites";

const CardSectionButton = ({ data, variant, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [__, createFavorite, deleteFavorite] = useFavorites();
  const { black, white, lightExtra } = COLORS;

  const handlePress = async () => {
    if (variant === "favorite") {
      if (isSelected) {
        deleteFavorite(data.id);
        setIsSelected(false);
      } else {
        createFavorite(data);
        setIsSelected(true);
      }
    }
  };

  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: isSelected ? lightExtra : white }]}
      onPress={handlePress}
    >
      {variant === "favorite" && (
        <AntDesign name="heart" size={13} color={isSelected ? white : black} />
      )}
      {variant === "schedule" && (
        <Fontisto name="date" size={13} color={isSelected ? white : black} />
      )}
    </TouchableOpacity>
  );
};

export default CardSectionButton;

const style = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    marginBottom: 5,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
