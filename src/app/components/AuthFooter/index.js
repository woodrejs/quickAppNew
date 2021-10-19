import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";

const AuthFooter = ({ title, text, handler }) => {
  return (
    <View style={style.container}>
      <Text style={style.text} children={text} />
      <TouchableOpacity style={style.box} onPress={handler}>
        <Text style={style.title} children={title} />
      </TouchableOpacity>
    </View>
  );
};

export default AuthFooter;

const style = StyleSheet.create({
  container: { display: "flex", alignItems: "center" },
  box: {},
  title: { ...STYLES.fonts.bold, fontSize: 14, color: COLORS.extra },
  text: { ...STYLES.fonts.regular, fontSize: 14 },
});
