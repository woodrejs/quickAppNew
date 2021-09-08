import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import NavSectionButton from "./NavSectionButton";
import NavSectionIcon from "./NavSectionIcon";

import { style } from "./index.style";
import { Props } from "./index.utils";
import { COLORS } from "../../style/colors";

const NavHeader: React.FC<Props> = ({ route: { navigation } }, screenName) => {
  const { navigate, openDrawer, canGoBack, goBack } = navigation;

  const handleIconPress = () => navigate(screenName, null);
  const handleButtonPress = () => openDrawer();
  const handleArrowPress = () => goBack();

  return (
    <SafeAreaView style={style.container}>
      <AntDesign
        name="arrowleft"
        size={24}
        color={canGoBack() ? COLORS.grey : "transparent"}
        onPress={handleArrowPress}
      />
      <NavSectionIcon press={handleIconPress} />
      <NavSectionButton press={handleButtonPress} />
    </SafeAreaView>
  );
};
export default NavHeader;
