import React from "react";
import { View, Text, StyleSheet } from "react-native";
//components
import Form from "./Form";
import AuthFooter from "../../components/AuthFooter";
//utils & styles
import { STYLES } from "../../style/styles";
import { screensNames } from "../../utils/screensNames";

export default function Register({ navigation }) {
  const handleFooter = () => navigation.navigate(screensNames.login);

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Rejestracja</Text>
        <Form navigation={navigation} />
      </View>
      <AuthFooter
        title="Logowanie"
        text="Masz już założone konto?"
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

// import React from "react";
// import { View, Text } from "react-native";
// //components
// import RegisterForm from "../../components/Forms/RegisterForm";
// import AuthLinksSection from "../../components/AuthLinksSection";
// //utils & styles
// import { screensNames } from "../../utils/screensNames";
// import { style } from "./index.style";
// import { Props } from "./index.utils";

// const Register: React.FC<Props> = ({ navigation }) => {
//   return (
//     <View style={style.container}>
//       <Text style={style.title}>utwórz {"\n"}konto</Text>
//       <RegisterForm navigation={navigation} />
//       <AuthLinksSection
//         navigation={navigation}
//         primaryButton={["zaloguj", screensNames.login]}
//       />
//     </View>
//   );
// };
// export default Register;
