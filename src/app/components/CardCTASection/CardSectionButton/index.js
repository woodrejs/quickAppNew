import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";
import { createFavorite, deleteFavorite } from "../../../utils/strapi";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites } from "../../../redux/user.slice";

const CardSectionButton = ({ data, variant, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const { black, white, lightExtra } = COLORS;
  const { id, uid, type, title, img } = data;
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);
  const dispatch = useDispatch();

  //id -> strapi db id
  //uid -> wroclaw go id
  //createFavorite,deleteFavorite
  const handlePress = async () => {
    // const resp = await createFavorite(data, jwt);
    // const resp = await deleteFavorite(id, jwt);

    if (variant === "favorite") {
      if (isSelected) {
        try {
          console.log("delete");
          await deleteFavorite(id, jwt);
          const filteredData = favorites.filter((item) => item.uid !== id);
          console.log(filteredData);
          dispatch(setFavorites(filteredData));
          setIsSelected(false);
        } catch (error) {
          console.log({ message: error });
        }
      } else {
        try {
          console.log("create");
          const resp = await createFavorite(data, jwt);
          dispatch(setFavorites([...favorites, resp]));
          setIsSelected(true);
        } catch (error) {
          console.log({ message: error });
        }
      }
    }

    // //add or remove from db or schedule
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
