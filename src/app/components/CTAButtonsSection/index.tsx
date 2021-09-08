import React from "react";
import { View } from "react-native";
//components
import CTASectionIconButton from "./CTASectionIconButton";
import CTASectionButton from "./CTASectionButton";
//utils & styles
import { style } from "./index.style";

type Props = {
  title: string;
};

const CTAButtonsSection: React.FC<Props> = ({ title }) => {
  return (
    <View style={style.container}>
      <CTASectionIconButton type="heart" />
      <CTASectionIconButton type="phone" />
      <CTASectionButton title={title} />
    </View>
  );
};
export default CTAButtonsSection;
