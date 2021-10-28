import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
//components
import Icon from "../../../components/Icon";
//utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default React.memo(function SettingsButton({ name, title, handler }) {
  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View style={style.container}>
        <Icon styles={style.icon} name={name} size={18} color={COLORS.grey} />
        <Text style={style.text} children={title} />
      </View>
    </TouchableWithoutFeedback>
  );
});

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightnest,
    ...STYLES.shadow,
    borderRadius: 10,
    minHeight: 50,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: { marginRight: 20 },
  text: { ...STYLES.fonts.bold, opacity: 0.8, fontSize: 14 },
});
