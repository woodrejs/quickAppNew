import React from "react";
import { View, Text } from "react-native";
//components
import RegisterForm from "../../components/Forms/RegisterForm";
import AuthLinksSection from "../../components/AuthLinksSection";
//utils & styles
import { screensNames } from "../../utils/screensNames";
import { style } from "./index.style";
import { Props } from "./index.utils";

const Register: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>utwórz {"\n"}konto</Text>
      <RegisterForm />
      <AuthLinksSection
        navigation={navigation}
        primaryButton={["zaloguj", screensNames.login]}
      />
    </View>
  );
};
export default Register;
