import React, { useMemo, useCallback } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
//components
import Badge from "../../../components/Badge";
//styles & utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import useFilters from "../../../hooks/useFilters";
import { stacksNames } from "../../../utils/stacksNames";

export default React.memo(function HorizontalSquareList({ list }) {
  return (
    <ScrollView horizontal>
      {list.map((square) => (
        <Square key={square.id} data={square} />
      ))}
    </ScrollView>
  );
});

const Square = React.memo(({ data }) => {
  //const
  const { url, title, variant, filters } = useMemo(() => data);

  //hooks
  const [setFilters] = useFilters(variant, filters);
  const navigation = useNavigation();

  //handlers
  const handler = useCallback(() => {
    setFilters();
    navigation.navigate(stacksNames[variant]);
  }, [variant]);

  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View style={style.squareContainer}>
        <ImageBackground
          style={style.squareBox}
          imageStyle={style.squareImage}
          source={url}
        >
          <Badge name="eye" styles={style.badge} />
        </ImageBackground>

        <Text style={style.squareTitle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
});

const style = StyleSheet.create({
  squareContainer: {},
  squareBox: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    position: "relative",
    ...STYLES.shadow,
    marginRight: 5,
    marginBottom: 5,
  },
  squareImage: { borderRadius: 10, opacity: 0.7 },
  squareTitle: {
    ...STYLES.fonts.bold,
    color: COLORS.dark,
    fontSize: 12,
    textAlign: "center",
    paddingTop: 15,
  },
  badge: { top: 5, right: 5 },
});
