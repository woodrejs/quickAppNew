import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import LoginForm from "../../components/Forms/LoginForm";
import AuthLinksSection from "../../components/AuthLinksSection";
//utils & styles
import { screensNames } from "../../utils/screensNames";
import { style } from "./index.style";
import { Props } from "./index.utils";

const Login = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>witaj {"\n"}ponownie</Text>
      <LoginForm navigation={navigation} />
      <AuthLinksSection
        primaryButton={["zarejestruj", screensNames.register]}
        secoundaryButton={["zapomniałeś hasła?", screensNames.register]}
        navigation={navigation}
      />
    </View>
  );
};
export default Login;
