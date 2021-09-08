import React from "react";
import { View, Text } from "react-native";
//components
import LoginForm from "../../components/Forms/LoginForm";
import AuthLinksSection from "../../components/AuthLinksSection";
//utils & styles
import { screensNames } from "../../utils/screensNames";
import { style } from "./index.style";
import { Props } from "./index.utils";

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>witaj {"\n"}ponownie</Text>
      <LoginForm />
      <AuthLinksSection
        primaryButton={["zarejestruj", screensNames.register]}
        secoundaryButton={["zapomniałeś hasła?", screensNames.register]}
        navigation={navigation}
      />
    </View>
  );
};
export default Login;
