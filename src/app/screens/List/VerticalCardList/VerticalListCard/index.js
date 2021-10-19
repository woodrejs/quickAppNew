import React from "react";
import { ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
//components
import AddToFavoriteButton from "../../../../components/AddToFavoriteButton";
import VerticalCardLabel from "./VerticalCardLabel";
//utils & styles
import { COLORS } from "../../../../style/colors";
import useId from "../../../../hooks/useId";

export default function VerticalListCard({ data, navigation, inFavorite = false }) {
  const { id, type, title, img } = data;
  const setId = useId();

  const handlePress = () => setId(id, type, navigation);

  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={{ uri: img }}
    >
      <TouchableOpacity style={style.box} onPress={handlePress}>
        <VerticalCardLabel title={title} />
      </TouchableOpacity>

      <AddToFavoriteButton data={data} active={inFavorite} />
    </ImageBackground>
  );
}
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
