import React from "react";
import { Text, StyleSheet, View } from "react-native";
//components
import Icon from "../../../components/Icon";
//utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default React.memo(function TitleSection({ title }) {
  return (
    <View style={style.container}>
      <Text style={style.title} children={title} />
      <Icon name="rightArrow" size={15} color={COLORS.extra} styles={style.icon} />
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 10,
    paddingLeft: 10,
  },

  icon: {},
  title: {
    ...STYLES.fonts.bold,
    fontSize: 18,
    textTransform: "capitalize",

    marginTop: 30,
  },
});
