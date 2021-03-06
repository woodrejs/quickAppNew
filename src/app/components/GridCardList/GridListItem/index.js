import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  TouchableWithoutFeedback,
} from "react-native";
//components
import AddToFavoriteButton from "../../AddToFavoriteButton";
//style & utils
import useId from "../../../hooks/useId";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default React.memo(function GridListItem({ data }) {
  //hooks
  const setId = useId();

  //const
  const { img, title, type, id } = data;

  //handlers
  const handlePress = () => setId(id, type);

  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={{ uri: img }}
    >
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={style.box}>
          <Text style={style.title} children={title} />
        </View>
      </TouchableWithoutFeedback>

      <AddToFavoriteButton data={data} active />
    </ImageBackground>
  );
});

const style = StyleSheet.create({
  container: {
    position: "relative",
    height: 200,
    width: Dimensions.get("window").width / 2 - 15,
    backgroundColor: COLORS.dark,
    marginBottom: 10,
    borderRadius: 10,
    ...STYLES.shadow,
  },
  image: { width: "100%", borderRadius: 10, opacity: 0.5 },
  box: {
    padding: 10,
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    ...STYLES.fonts.bold,
    color: COLORS.lightnest,
    fontSize: 14,
    paddingTop: 5,
    width: "90%",
  },
});
