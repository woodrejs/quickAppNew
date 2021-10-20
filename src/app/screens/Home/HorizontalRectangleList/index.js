import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import DATA from "./index.data";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import useFilters from "../../../hooks/useFilters";
import { stacksNames } from "../../../utils/stacksNames";

export default function HorizontalRectangleList({ navigation }) {
  return (
    <ScrollView horizontal>
      {DATA.map((data) => (
        <Rectangle key={data.id} data={data} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
function Rectangle({ data, navigation }) {
  const { url, title, tags, variant, filters } = data;
  const [setFilters] = useFilters(variant, filters);

  const handler = () => {
    setFilters();
    navigation.navigate(stacksNames[variant]);
  };

  return (
    <TouchableOpacity style={style.rectangleContainer} onPress={handler}>
      <ImageBackground
        style={style.rectangleBox}
        imageStyle={style.rectangleImage}
        source={url}
      >
        <Text style={style.rectangleTitle}>{title}</Text>
        <Text style={style.rectangleTags}>{tags}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  rectangleContainer: { marginRight: 5, paddingBottom: 5 },
  rectangleBox: {
    width: 350,
    height: 270,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    ...STYLES.shadow,
    paddingVertical: 25,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
  rectangleImage: { borderRadius: 10, flex: 1, opacity: 0.7 },
  rectangleTitle: {
    ...STYLES.fonts.bold,
    color: COLORS.lightnest,
    fontSize: 31,
    marginBottom: 5,
  },
  rectangleTags: { ...STYLES.fonts.bold, fontSize: 14, color: COLORS.lightnest },
});
