import React, { useState, useCallback, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../Icon";
//style & utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import useFavorites from "../../hooks/useFavorites";

//!!!important!!! useFavorites, arr => obj
export default React.memo(function AddToFavoriteButton({ data, active = false }) {
  const [isSelected, setIsSelected] = useState(active);
  const [__, createFavorite, deleteFavorite] = useFavorites();
  const isLogged = useSelector(({ userSlice }) => userSlice.logged);

  if (!isLogged) return null;

  const backgroundColor = useMemo(
    () => ({ backgroundColor: isSelected ? COLORS.extra : COLORS.lightnest }),
    [isSelected]
  );

  const handlePress = useCallback(() => {
    if (isSelected) {
      deleteFavorite(data.id);
      setIsSelected(false);
    } else {
      createFavorite(data);
      setIsSelected(true);
    }
  }, [isSelected, data]);

  return (
    <TouchableOpacity style={[style.container, backgroundColor]} onPress={handlePress}>
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
