import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import * as Animatable from "react-native-animatable";
//components
import Badge from "../../Badge";
//utils
import useId from "../../../hooks/useId";
import { getTicketingTitle } from "../../../utils/functions";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default React.memo(function Card({ data }) {
  //hooks
  const navigation = useNavigation();
  const setId = useId();
  const ref = useRef(null);

  //const
  const { id, img, ticketing, title } = data;

  //handlers
  const handlePress = async () => {
    await ref.current.pulse();
    //setId(id, "offers", navigation);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animatable.View style={style.container} ref={ref}>
        {/* west */}
        <View style={style.titleBox}>
          <Text style={style.ticketing} children={getTicketingTitle(ticketing)} />
          <Text style={style.title} children={title} />
        </View>
        {/* east */}
        <ImageBackground
          style={style.imageBox}
          imageStyle={style.image}
          source={{ uri: img }}
        >
          <Badge name="star" styles={style.badge} />
        </ImageBackground>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
});

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: COLORS.extra,
    borderRadius: 10,
    marginTop: 5,
    height: 120,
    ...STYLES.shadow,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleBox: {
    width: "60%",
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
  },
  ticketing: { ...STYLES.fonts.bold, textTransform: "uppercase", fontSize: 12 },
  title: { ...STYLES.fonts.bold, color: COLORS.lightnest, fontSize: 14 },
  imageBox: {
    backgroundColor: COLORS.dark,
    width: "40%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 0.5,
  },
  badge: { position: "absolute", top: 5, left: 5 },
});
