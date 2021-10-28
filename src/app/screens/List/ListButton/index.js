import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
//components
import Icon from "../../../components/Icon";
//utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default React.memo(function ListButton({
  handler,
  icon,
  active = true,
  styles = {},
}) {
  return (
    <View style={styles}>
      <TouchableWithoutFeedback onPress={handler}>
        <View
          style={[
            style.container,
            { backgroundColor: active ? COLORS.lightnest : COLORS.extra },
          ]}
        >
          <Icon name={icon} size={26} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
    ...STYLES.shadow,
  },
});
