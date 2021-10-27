import React from "react";
import { Text, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
//components
import Icon from "../../../components/Icon";
//utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default React.memo(function TitleSection({ title }) {
  return (
    <View style={style.box}>
      <Animatable.View
        style={style.container}
        animation="fadeInUp"
        useNativeDriver
        delay={500}
      >
        <Text style={style.title} children={title} />
        <Icon name="rightArrow" size={15} color={COLORS.extra} styles={style.icon} />
      </Animatable.View>
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
  box: { overflow: "hidden" },
  icon: {},
  title: {
    ...STYLES.fonts.bold,
    fontSize: 18,
    textTransform: "capitalize",

    marginTop: 30,
  },
});
