import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../../components/Icon";
//utils & styles
import useModal from "../../hooks/useModal";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default function InfoModal() {
  //hooks
  const { closeInfo } = useModal();
  const { message, success, isOpen } = useSelector(({ appSlice }) => appSlice.info);

  if (!isOpen) return null;

  return (
    <TouchableWithoutFeedback onPress={closeInfo}>
      <View style={style.container}>
        <View style={style.mask} />
        <View style={style.icon}>
          <Icon name={success ? "check" : "failed"} size={70} color={COLORS.extra} />
        </View>
        <Text style={style.message} children={message} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  mask: {
    backgroundColor: COLORS.extra,
    position: "absolute",
    opacity: 0.9,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    top: 0,
    left: 0,
  },
  icon: {
    backgroundColor: COLORS.lightnest,
    borderRadius: 100,
    padding: 20,
    ...STYLES.shadow,
  },
  message: {
    ...STYLES.fonts.bold,
    color: COLORS.lightnest,
    fontSize: 16,
    position: "absolute",
    bottom: 30,
    left: 30,
    width: Dimensions.get("window").width * 0.8,
  },
});
