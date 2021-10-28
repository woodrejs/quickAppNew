import React, { useCallback } from "react";
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
//components
import Icon from "../../Icon";
//utils & styles
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import { stacksNames } from "../../../utils/stacksNames";

export default React.memo(function MenuDrawerUserSection() {
  //hooks
  const navigation = useNavigation();
  const { avatar, username } = useSelector(({ userSlice }) => userSlice);

  //const
  const { url } = avatar;

  //handlers
  const handler = useCallback(() => navigation.navigate(stacksNames.settings));

  return (
    <View style={style.container}>
      <View style={style.box}>
        <TouchableWithoutFeedback onPress={handler}>
          <View style={style.imageBox}>
            {url && <Image style={style.image} source={{ uri: url }} />}
            {!url && <Icon name="user" />}
          </View>
        </TouchableWithoutFeedback>
        <Text style={style.title}>
          Witaj {"\n"}
          {username ?? "ponownie"}
        </Text>
      </View>
    </View>
  );
});

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
