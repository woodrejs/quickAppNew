import React from "react";
import { ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { screensNames } from "../../../utils/screensNames";
import { COLORS } from "../../../style/colors";
import VerticalCardLabel from "./VerticalCardLabel";
import CardCTASection from "../../CardCTASection";
import { setId as setPlaceId } from "../../../redux/singlePlace.slice";
import { setId as setOfferId } from "../../../redux/singleOffer.slice";

const VerticalListCard = ({ title, id, img, navigation, type }) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    console.log(id);

    if (type === "place") {
      dispatch(setPlaceId(id));
      navigation.navigate(screensNames.placeSingle);
    } else {
      dispatch(setOfferId(id));
      navigation.navigate(screensNames.eventSingle);
    }
  };
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={{ uri: img.standard }}
    >
      <TouchableOpacity style={style.box} onPress={handlePress}>
        <VerticalCardLabel title={title} />
      </TouchableOpacity>
      <CardCTASection />
    </ImageBackground>
  );
};

export default VerticalListCard;

const style = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 20,
    marginBottom: 10,
    position: "relative",
  },
  box: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: { opacity: 0.7, borderRadius: 20 },
});
