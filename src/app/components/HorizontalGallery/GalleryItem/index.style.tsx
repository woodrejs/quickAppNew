import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    height: 220,
    width: 170,
    borderRadius: 20,
    marginRight: 10,
  },
  image: { borderRadius: 20, opacity: 0.7 },
});
