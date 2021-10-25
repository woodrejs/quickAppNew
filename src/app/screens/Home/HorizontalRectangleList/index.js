import React, { useMemo, useCallback } from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import useFilters from "../../../hooks/useFilters";
import { stacksNames } from "../../../utils/stacksNames";
import { useNavigation } from "@react-navigation/native";

export default React.memo(function HorizontalRectangleList({ list }) {
  return (
    <ScrollView horizontal>
      {list.map((data) => (
        <Rectangle key={data.id} data={data} />
      ))}
    </ScrollView>
  );
});

const Rectangle = React.memo(({ data }) => {
  //const
  const { url, title, tags, variant, filters } = useMemo(() => data);

  //hooks
  const [setFilters] = useFilters(variant, filters);
  const navigation = useNavigation();

  //handlers
  const handler = useCallback(() => {
    setFilters();
    navigation.navigate(stacksNames[variant]);
  }, [variant]);

  return (
    <TouchableWithoutFeedback style={style.rectangleContainer} onPress={handler}>
      <ImageBackground
        style={style.rectangleBox}
        imageStyle={style.rectangleImage}
        source={url}
      >
        <Text style={style.rectangleTitle}>{title}</Text>
        <Text style={style.rectangleTags}>{tags}</Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
});

const style = StyleSheet.create({
  rectangleContainer: {},
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
    marginRight: 5,
    marginBottom: 5,
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
