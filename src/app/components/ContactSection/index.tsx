import React from "react";
import { View } from "react-native";

import SectionIcon from "./SectionIcon";
import { style } from "./index.style";

const ContactSection = ({ email, telephone }) => {
  return (
    <View style={style.container}>
      <SectionIcon title={email} type="mail" />
      <SectionIcon title={telephone} type="phone" />
    </View>
  );
};
export default ContactSection;
