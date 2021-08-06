import React from "react";
import { View } from "react-native";

import SectionIcon from "./SectionIcon";
import { style } from "./index.style";

const ContactSection = () => {
  return (
    <View style={style.container}>
      <SectionIcon title="jakismail@mail.com" type="mail" />
      <SectionIcon title="532589632" type="phone" />
    </View>
  );
};
export default ContactSection;
