import React from "react";
import { View, Text, StyleSheet } from "react-native";
//components
import Form from "./Form";
import AuthFooter from "../../components/AuthFooter";
//utils & styles
import { STYLES } from "../../style/styles";
import { screensNames } from "../../utils/screensNames";

export default function Login({ navigation }) {
  const handleFooter = () => navigation.navigate(screensNames.register);

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Logowanie</Text>
        <Form navigation={navigation} />
      </View>
      <AuthFooter
        title="Rejestracja"
        text="Nie masz jeszcze konta?"
        handler={handleFooter}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  title: { ...STYLES.fonts.bold, fontSize: 28, paddingTop: 60, paddingBottom: 40 },
});

// import React, { useEffect } from "react";
// import { View, Text } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// //components
// import LoginForm from "../../components/Forms/LoginForm";
// import AuthLinksSection from "../../components/AuthLinksSection";
// //utils & styles
// import { screensNames } from "../../utils/screensNames";
// import { style } from "./index.style";

// const Login = ({ navigation }) => {
//   return (
//     <View style={style.container}>
//       <Text style={style.title}>witaj {"\n"}ponownie</Text>
//       <LoginForm navigation={navigation} />
//       <AuthLinksSection
//         primaryButton={["zarejestruj", screensNames.register]}
//         secoundaryButton={["zapomniałeś hasła?", screensNames.register]} //!!!important!!!
//         navigation={navigation}
//       />
//     </View>
//   );
// };
// export default Login;
