import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../../../components/Icon";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

const ButtonIcon = ({
  name,
  size = "sm",
  handler = null,
  active = false,
  styles = {},
}) => {
  const { extra, lightnest, dark } = COLORS;
  return (
    <TouchableOpacity
      style={[
        style.container,
        styles,
        {
          backgroundColor: active ? extra : lightnest,
          width: size === "sm" ? 35 : 70,
          height: size === "sm" ? 35 : 70,
        },
      ]}
      onPress={handler}
      children={<Icon name={name} size={size === "sm" ? 21 : 28} color={dark} />}
    />
  );
};

export default ButtonIcon;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightnest,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    ...STYLES.shadow,
  },
});
