import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setInfo } from "../../redux/app.slice";
import LoadingSection from "../LoadingSection";

const InfoModal = () => {
  const message = useSelector(({ appSlice }) => appSlice.info.message);
  const stage = useSelector(({ appSlice }) => appSlice.info.stage);
  const dispatch = useDispatch();
  const handlePress = () => dispatch(setInfo(["waiting"]));
  console.log(stage);

  switch (stage) {
    case "success":
      return (
        <View style={styles.container}>
          <Text>{message}</Text>
          <Button title="ok" onPress={handlePress} />
        </View>
      );

    case "failed":
      return (
        <View style={styles.container}>
          <Text>{message}</Text>
          <Button title="ok" onPress={handlePress} />
        </View>
      );
    default:
      return <LoadingSection />;
  }
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InfoModal;
