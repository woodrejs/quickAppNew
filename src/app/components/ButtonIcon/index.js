import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
//components
import Icon from "../Icon";
//utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default React.memo(function ButtonIcon({
  name,
  size = "sm",
  handler = null,
  active = false,
  styles = {},
}) {
  return (
    <TouchableOpacity
      style={[
        style.container,
        styles,
        {
          backgroundColor: active ? COLORS.extra : COLORS.lightnest,
          width: size === "sm" ? 35 : 70,
          height: size === "sm" ? 35 : 70,
        },
      ]}
      onPress={handler}
      children={<Icon name={name} size={size === "sm" ? 21 : 28} color={COLORS.dark} />}
    />
  );
});

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
