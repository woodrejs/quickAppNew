import React from "react";
import * as Progress from "react-native-progress";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../../../components/Icon";
//utils & styles
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

const ListButton = ({ handler, variant, icon, active = true, customStyle = {} }) => {
  const { dark, lightnest, extra } = COLORS;
  const stage = useSelector(({ listSlice }) => listSlice[variant].stage);

  return (
    <TouchableOpacity onPress={handler} style={customStyle}>
      <View style={[style.container, { backgroundColor: active ? lightnest : extra }]}>
        {stage === "waiting" && <Icon name={icon} size={26} />}
        {stage === "pending" && (
          <Progress.Circle size={30} indeterminate={true} color={dark} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListButton;

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
