import React from "react";
import { View } from "react-native";
//components
import AuthSectionButton from "./AuthSectionButton";
//utils & styles
import { style } from "./index.style";
import { Props } from "./index.utils";

const AuthLinksSection: React.FC<Props> = ({
  primaryButton,
  secoundaryButton,
  navigation,
}) => {
  return (
    <View style={style.container}>
      {primaryButton && (
        <AuthSectionButton
          navigation={navigation}
          name={primaryButton[0]}
          path={primaryButton[1]}
        />
      )}
      {secoundaryButton && (
        <AuthSectionButton
          navigation={navigation}
          name={secoundaryButton[0]}
          path={secoundaryButton[1]}
        />
      )}
    </View>
  );
};
export default AuthLinksSection;
