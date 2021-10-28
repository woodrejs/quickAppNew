import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
//components
import Icon from "../../Icon";
//utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import { stacksNames } from "../../../utils/stacksNames";

export default function Tile({ name, icon, title, handler }) {
  //hooks
  const navigation = useNavigation();

  if (!navigation.isReady()) return null;

  //const
  const route = navigation.getCurrentRoute().name;
  const color = name === route ? COLORS.extra : COLORS.grey;

  //handlers
  const handlePress = () => handler(stacksNames[title]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.container}>
        <Text style={[style.title, { color }]} children={stacksNames[title]} />
        <Icon name={icon} color={color} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    ...STYLES.shadow,
    backgroundColor: COLORS.dark,
    width: Dimensions.get("window").width / 2 - 26,
    height: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 10,
  },
  title: {
    ...STYLES.fonts.bold,
    fontSize: 12,
    textTransform: "uppercase",
  },
});
