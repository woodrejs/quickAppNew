import * as React from "react";
import { Text } from "react-native";

import { Props } from "./index.utils";
import { style } from "./index.style";

const FooterButton: React.FC<Props> = ({ name, path, navigation }) => {
  const handlePress = () => navigation.navigate(path);

  return <Text style={style.button} onPress={handlePress} children={name} />;
};
export default FooterButton;
