import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
//utils
import { setFilters } from "../../../../redux/list.slice";
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";
import { stacksNames } from "../../../../utils/stacksNames";

export default React.memo(function Rectangle({ data }) {
  //hooks
  const navigation = useNavigation();
  const ref = useRef(null);
  const dispatch = useDispatch();

  //const
  const { url, title, tags, variant, filters } = data;

  //handlers
  const handler = async () => {
    await ref.current.pulse();
    dispatch(setFilters([variant, filters]));
    navigation.navigate(stacksNames[variant]);
  };

  return (
    <Animatable.View ref={ref} style={style.container}>
      <TouchableWithoutFeedback onPress={handler}>
        <ImageBackground style={style.box} imageStyle={style.image} source={url}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.tags}>{tags}</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </Animatable.View>
  );
});

const style = StyleSheet.create({
  container: {
    ...STYLES.shadow,
    marginTop: 10,
  },
  box: {
    width: 350,
    height: 270,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: 10,
    marginBottom: 5,
  },
  image: { borderRadius: 10, flex: 1, opacity: 0.7 },
  title: {
    ...STYLES.fonts.bold,
    color: COLORS.lightnest,
    fontSize: 31,
    marginBottom: 5,
  },
  tags: { ...STYLES.fonts.bold, fontSize: 14, color: COLORS.lightnest },
});
