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
import LoadingSection from "../LoadingSection";
//utils & styles
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import useModal from "../../hooks/useModal";

export default function InfoModal() {
  const [setInfo] = useModal();
  const { message, stage } = useSelector(({ appSlice }) => appSlice.info);

  const handlePress = () => setInfo("waiting");

  if (stage === "waiting" || stage === "pending") return <LoadingSection />;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.container}>
        <View style={style.mask} />
        <View style={style.icon}>
          <Icon
            name={stage === "success" ? "check" : "failed"}
            size={70}
            color={COLORS.extra}
          />
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
