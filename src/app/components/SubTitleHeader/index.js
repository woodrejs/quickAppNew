import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
//utils & styles
import { COLORS } from "../../style/colors";
import { Fontisto } from "@expo/vector-icons";
import { stacksNames } from "../../utils/stacksNames";
import { style } from "./index.style";
import { useSelector, useDispatch } from "react-redux";
import { setFilters as setOffersFilters } from "../../redux/listOffer.slice";
import { setFilters as setPlacesFilters } from "../../redux/listPlace.slice";

const SubTitleHeader = ({ navigation, variant, title, filters }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    switch (variant) {
      case "places":
        dispatch(setPlacesFilters(filters));
        navigation.navigate(stacksNames.places);
        break;
      case "schedule":
        navigation.navigate(stacksNames.schedule);
        break;
      case "offers":
        dispatch(setOffersFilters(filters));
        navigation.navigate(stacksNames.events);
        break;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style.container}>
      <View style={style.box}>
        <Text style={style.title}>{title}</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
    </TouchableOpacity>
  );
};

export default SubTitleHeader;
