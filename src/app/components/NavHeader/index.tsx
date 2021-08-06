import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import HeaderButton from "./HeaderButton";
import HeaderIcon from "./HeaderIcon";

import { style } from "./index.style";
import { Props } from "./index.utils";
import { COLORS } from "../../style/colors";
import { screensName } from "../../routes/utils";

const NavHeader: React.FC<Props> = ({ route: { navigation } }) => {
  const { navigate, openDrawer, canGoBack, goBack } = navigation;

  const handleIconPress = () => navigate(screensName.settings, null);
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
      <HeaderIcon press={handleIconPress} />
      <HeaderButton press={handleButtonPress} />
    </SafeAreaView>
  );
};
export default NavHeader;
