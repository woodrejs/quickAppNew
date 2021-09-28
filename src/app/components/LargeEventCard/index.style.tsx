import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: {
    paddingTop: 60,
  },

  imageBox: {
    height: 300,
    width: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 20,
  },
  image: { borderRadius: 20, opacity: 0.5 },
});
