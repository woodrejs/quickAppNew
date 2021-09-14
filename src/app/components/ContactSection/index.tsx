import React from "react";
import { View } from "react-native";
//components
import SectionIcon from "./SectionIcon";
//utils & styles
import { style } from "./index.style";

type Props = {
  email: string;
  telephone: string;
};
const ContactSection: React.FC<Props> = ({ email, telephone }) => {
  return (
    <View style={style.container}>
      {email && <SectionIcon title={email} type="mail" />}
      {telephone && <SectionIcon title={telephone} type="phone" />}
    </View>
  );
};
export default ContactSection;
