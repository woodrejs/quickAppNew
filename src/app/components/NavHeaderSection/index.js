import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
//components
import NavSectionButton from "./NavSectionButton";
import Icon from "../Icon";
import Logo from "./Logo";
//utils & style
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import { screensNames } from "../../utils/screensNames";

export default React.memo(function NavHeader() {
  //hooks
  const navigation = useNavigation();
  const route = useRoute();

  //const
  const { canGoBack, goBack } = navigation;

  //handlers
  const handleLogo = useCallback(() => navigation.navigate(screensNames.home, null));

  //utils
  const setStyle = useCallback(() => {
    return route.name === screensNames.placeSingle ||
      route.name === screensNames.eventSingle
      ? { backgroundColor: "rgba(0, 0, 0, 0.2)" }
      : { backgroundColor: COLORS.extra, ...STYLES.shadow };
  }, [route.name]);

  return (
    <SafeAreaView style={[style.container, setStyle(route.name)]}>
      {/* Arrow */}
      {canGoBack() && (
        <TouchableOpacity onPress={goBack} style={style.arrowBox}>
          <Icon name="leftArrow" color={COLORS.lightnest} />
        </TouchableOpacity>
      )}

      {/* Logo */}
      <TouchableWithoutFeedback onPress={handleLogo}>
        <View style={style.iconBox}>
          <Logo />
          {!canGoBack() && <Text style={style.iconTitle}>quick week</Text>}
        </View>
      </TouchableWithoutFeedback>

      {/* Menu  button*/}
      <NavSectionButton navigation={navigation} />
    </SafeAreaView>
  );
});

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
  iconTitle: {
    ...STYLES.fonts.bold,
    fontSize: 12,
    marginLeft: 10,
    textTransform: "capitalize",
    color: COLORS.lightnest,
  },
});
