import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
//components
import Badge from "../../../../components/Badge";
//utils
import { stacksNames } from "../../../../utils/stacksNames";
import { setFilters } from "../../../../redux/list.slice";
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";

export default React.memo(function Square({ data }) {
  //hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //const
  const { url, title, variant, filters } = data;

  //handlers
  const handler = async () => {
    dispatch(setFilters([variant, filters]));
    navigation.navigate(stacksNames[variant]);
  };

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={handler}>
        <View>
          <ImageBackground style={style.box} imageStyle={style.image} source={url}>
            <Badge name="eye" styles={style.badge} />
          </ImageBackground>

          <Text style={style.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
});

const style = StyleSheet.create({
  container: { ...STYLES.shadow, marginTop: 10 },
  box: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    position: "relative",
    marginLeft: 5,
    marginBottom: 5,
  },
  image: { borderRadius: 10, opacity: 0.7 },
  title: {
    ...STYLES.fonts.bold,
    color: COLORS.dark,
    fontSize: 12,
    textAlign: "center",
    paddingTop: 15,
  },
  badge: { top: 5, right: 5 },
});
