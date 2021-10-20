import { COLORS } from "./colors";

export const STYLES = {
  fonts: {
    bold: { fontFamily: "PoppinsBold", fontWeight: "700", color: COLORS.dark },
    regular: { fontFamily: "PoppinsRegular", fontWeight: "400", color: COLORS.dark },
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
};
