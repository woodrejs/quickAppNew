import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text,
  View,
} from "react-native";
//components
import NavSectionButton from "./NavSectionButton";
import Icon from "../Icon";
//utils & style
import { style } from "./index.style";
import { Props } from "./index.utils";
import { COLORS } from "../../style/colors";
import { stacksNames } from "../../utils/stacksNames";
import { screensNames } from "../../utils/screensNames";

const NavHeader: React.FC<Props> = ({ route: { navigation } }, screenName) => {
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
};
export default NavHeader;

function setColor(screen) {
  return screen === screensNames.placeSingle || screen === screensNames.eventSingle
    ? "transparent"
    : COLORS.extra;
}
function getCurrScreen(navigation) {
  const routes = navigation.getState().routes;
  return routes[routes.length - 1].name;
}
