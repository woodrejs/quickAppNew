import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../Icon";
//style & utils
import useFavorites from "../../hooks/useFavorites";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default React.memo(function AddToFavoriteButton({ data, active = false }) {
  //hooks
  const [isSelected, setIsSelected] = useState(active);
  const { logged, favorites } = useSelector(({ userSlice }) => userSlice);
  const { createFavorite, deleteFavorite } = useFavorites(favorites);

  //handlers
  const handlePress = () => {
    if (isSelected) {
      deleteFavorite(data.id);
      setIsSelected(false);
    } else {
      createFavorite(data);
      setIsSelected(true);
    }
  };

  if (!logged) return null;

  return (
    <TouchableOpacity
      style={[
        style.container,
        { backgroundColor: isSelected ? COLORS.extra : COLORS.lightnest },
      ]}
      onPress={handlePress}
    >
      <Icon name="heart" size={21} />
    </TouchableOpacity>
  );
});

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
