import React from "react";
import { View, Text } from "react-native";

import RegisterForm from "../../components/Forms/RegisterForm";
import AuthFooter from "../../components/AuthFooter";

import { screensName } from "../../routes/utils";
import { style } from "./index.style";
import { Props } from "./index.utils";

const Register: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>utwórz {"\n"}konto</Text>
      <RegisterForm />
      <AuthFooter
        navigation={navigation}
        primaryButton={["zaloguj", screensName.login]}
      />
    </View>
  );
};
export default Register;
