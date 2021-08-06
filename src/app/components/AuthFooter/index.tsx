import React from "react";
import { View, StyleSheet } from "react-native";
import FooterButton from "./FooterButton";

import { style } from "./index.style";
import { Props } from "./index.utils";

const AuthFooter: React.FC<Props> = ({ primaryButton, secoundaryButton, navigation }) => {
  return (
    <View style={style.container}>
      {primaryButton && (
        <FooterButton
          navigation={navigation}
          name={primaryButton[0]}
          path={primaryButton[1]}
        />
      )}
      {secoundaryButton && (
        <FooterButton
          navigation={navigation}
          name={secoundaryButton[0]}
          path={secoundaryButton[1]}
        />
      )}
    </View>
  );
};
export default AuthFooter;
