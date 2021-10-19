import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../Icon";
//style & utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import useFavorites from "../../hooks/useFavorites";

export default function AddToFavoriteButton({ data, active = false }) {
  const [isSelected, setIsSelected] = useState(active);
  const isLogged = useSelector(({ userSlice }) => userSlice.logged);
  const [__, createFavorite, deleteFavorite] = useFavorites();
  const { extra, lightnest } = COLORS;

  const handlePress = async () => {
    if (isSelected) {
      deleteFavorite(data.id);
      setIsSelected(false);
    } else {
      createFavorite(data);
      setIsSelected(true);
    }
  };

  if (!isLogged) return null;

  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: isSelected ? extra : lightnest }]}
      onPress={handlePress}
    >
      <Icon name="heart" size={21} />
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 50,
    ...STYLES.shadow,
    padding: 5,
    top: 10,
    right: 10,
  },
});
