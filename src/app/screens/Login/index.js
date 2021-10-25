import React from "react";
import { View, Text, StyleSheet } from "react-native";
//components
import Form from "./Form";
import AuthFooter from "../../components/AuthFooter";
//utils
import { STYLES } from "../../style/styles";

export default React.memo(function Login() {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Logowanie</Text>
        <Form />
      </View>
      <AuthFooter name="register" title="Rejestracja" text="Nie masz jeszcze konta?" />
    </View>
  );
});

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
