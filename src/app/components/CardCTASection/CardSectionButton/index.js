import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";
import { createFavorite, deleteFavorite } from "../../../utils/strapi";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites } from "../../../redux/user.slice";
import { setInfo } from "../../../redux/app.slice";

const CardSectionButton = ({ data, variant, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const { black, white, lightExtra } = COLORS;
  const { id, uid, type, title, img } = data;
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);
  const dispatch = useDispatch();

  const handlePress = async () => {
    dispatch(setInfo(["pending"]));
    if (variant === "favorite") {
      if (isSelected) {
        try {
          await deleteFavorite(id, jwt);
          const filteredData = favorites.filter((item) => item.uid !== id);
          dispatch(setFavorites(filteredData));
          dispatch(setInfo(["success", `"${title}" został usunięty z ulubionych.`]));
          setIsSelected(false);
        } catch (error) {
          dispatch(
            setInfo(["failed", `Błąd podczas usuwania "${title}". Spróbuj ponownie.`])
          );
        }
      } else {
        try {
          const resp = await createFavorite(data, jwt);
          dispatch(setFavorites([...favorites, resp]));
          dispatch(setInfo(["success", `"${title}" został dodany do ulubionych.`]));
          setIsSelected(true);
        } catch (error) {
          dispatch(
            setInfo(["failed", `Błąd podczas dodawania "${title}". Spróbuj ponownie.`])
          );
        }
      }
    }

    //add or remove from db or schedule
    // if (variant === "schedule") {
    //   if (isSelected) {
    //     //delete
    //   } else {
    //     //create
    //   }
    // }
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
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTMwMGQ0MmU5ZWJlNDUyOGQ2NGMyNCIsImlhdCI6MTYzMjk4OTQzNSwiZXhwIjoxNjM1NTgxNDM1fQ.jHk1exuEgH1MWfrj0pBrLWlwu8GOkgkNzU-v9531vaw"
