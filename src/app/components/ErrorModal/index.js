import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { setError } from "../../redux/app.slice";
import { useSelector, useDispatch } from "react-redux";

const ErrorModal = () => {
  const message = useSelector(({ appSlice }) => appSlice.error.message);
  const dispatch = useDispatch();
  const handlePress = () => dispatch(setError([false, ""]));

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button title="Spróbuj ponownie" onPress={handlePress} />
    </View>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
