import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
} from "react-native";
//components
import NavSectionButton from "./NavSectionButton";
import Icon from "../Icon";
//utils & style
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import { screensNames } from "../../utils/screensNames";

export default function NavHeader({ route: { navigation } }, screenName) {
  const { canGoBack, goBack } = navigation;
  const screen = getCurrScreen(navigation);
  const bckColor = setColor(screen);

  const handleArrow = () => goBack();
  const handleLogo = () => navigation.navigate(screensNames.home, null);

  return (
    <SafeAreaView style={[style.container, { backgroundColor: bckColor }]}>
      {/* Arrow */}
      {canGoBack() && (
        <TouchableOpacity onPress={handleArrow} style={style.arrowBox}>
          <Icon name="leftArrow" color={COLORS.lightnest} />
        </TouchableOpacity>
      )}

      {/* Logo */}
      <TouchableWithoutFeedback onPress={handleLogo}>
        <View style={style.iconBox}>
          <Image source={require("./logo.jpg")} style={style.icon} />
          {!canGoBack() && <Text style={style.iconTitle}>quick week</Text>}
        </View>
      </TouchableWithoutFeedback>

      {/* Menu  button*/}
      <NavSectionButton navigation={navigation} />
    </SafeAreaView>
  );
}

function setColor(screen) {
  return screen === screensNames.placeSingle || screen === screensNames.eventSingle
    ? "transparent"
    : COLORS.extra;
}
function getCurrScreen(navigation) {
  const routes = navigation.getState().routes;
  return routes[routes.length - 1].name;
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    height: 80,
    backgroundColor: COLORS.extra,
  },
  arrowBox: { paddingRight: 20, paddingVertical: 10 },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { height: 40, width: 40, borderRadius: 50 },
  iconTitle: {
    ...STYLES.fonts.bold,
    fontSize: 12,
    marginLeft: 10,
    textTransform: "capitalize",
    color: COLORS.lightnest,
  },
});
