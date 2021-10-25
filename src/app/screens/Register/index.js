import React from "react";
import { View, Text, StyleSheet } from "react-native";
//components
import Form from "./Form";
import AuthFooter from "../../components/AuthFooter";
//utils
import { STYLES } from "../../style/styles";

export default React.memo(function Register() {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Rejestracja</Text>
        <Form />
      </View>
      <AuthFooter name="login" title="Logowanie" text="Masz już założone konto?" />
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
