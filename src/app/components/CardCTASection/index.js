import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CardSectionButton from "./CardSectionButton";

const CardCTASection = ({ data, inFavorite, inSchedule = false }) => {
  const isLogged = useSelector(({ userSlice }) => userSlice.logged);

  return (
    isLogged && (
      <View style={style.container}>
        <CardSectionButton data={data} variant="favorite" selected={inFavorite} />
        <CardSectionButton data={data} variant="schedule" selected={inSchedule} />
      </View>
    )
  );
};

export default CardCTASection;

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
