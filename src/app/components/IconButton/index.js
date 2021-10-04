import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { COLORS } from "../../style/colors";

const IconButton = ({ handler, variant, active = true }) => {
  const { white, black, lightExtra } = COLORS;
  const displayIcon = () => {
    switch (variant) {
      case "plus":
        return <AntDesign name="plus" size={20} color={active ? white : black} />;
      case "heart":
        return <AntDesign name="heart" size={20} color={active ? white : black} />;
      case "phone":
        return <Entypo name="phone" size={26} color={active ? white : black} />;
      case "mail":
        return <Entypo name="mail" size={26} color={active ? white : black} />;
      case "location":
        return <MaterialIcons name="place" size={28} color={active ? white : black} />;
      case "schedule":
        return <MaterialIcons name="schedule" size={28} color={active ? white : black} />;
      case "fb":
        return <FontAwesome name="facebook" size={28} color={active ? white : black} />;
      case "web":
        return (
          <MaterialCommunityIcons name="web" size={28} color={active ? white : black} />
        );
    }
  };

  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={[style.container, { backgroundColor: active ? lightExtra : white }]}
        children={displayIcon()}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
