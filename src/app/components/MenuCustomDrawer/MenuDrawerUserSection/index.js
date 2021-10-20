import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../../Icon";
//utils & styles
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default function MenuDrawerUserSection() {
  const { url } = useSelector(({ userSlice }) => userSlice.avatar);
  return (
    <View style={style.container}>
      <View style={style.box}>
        <View style={style.imageBox}>
          {url && <Image style={style.image} source={{ uri: url }} />}
          {!url && <Icon name="user" />}
        </View>
        <Text style={style.title}>Witaj {"\n"}username</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  box: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: { height: "100%", width: "100%" },
  imageBox: {
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: COLORS.grey,
    height: 80,
    width: 80,
    ...STYLES.shadow,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    paddingLeft: 20,
    textAlign: "left",
    ...STYLES.fonts.bold,
    color: COLORS.grey,
    fontSize: 24,
    textTransform: "capitalize",
  },
});
