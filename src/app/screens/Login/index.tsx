import React from "react";
import { View, Text } from "react-native";

import LoginForm from "../../components/Forms/LoginForm";
import AuthFooter from "../../components/AuthFooter";

import { screensName } from "../../routes/utils";
import { style } from "./index.style";
import { Props } from "./index.utils";

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>witaj {"\n"}ponownie</Text>
      <LoginForm />
      <AuthFooter
        primaryButton={["zarejestruj", screensName.register]}
        secoundaryButton={["zapomniałeś hasła?", screensName.register]}
        navigation={navigation}
      />
    </View>
  );
};
export default Login;
