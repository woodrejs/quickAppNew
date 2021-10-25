import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//components
import Badge from "../Badge";
//utils
import useId from "../../hooks/useId";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import { getTicketingTitle } from "../../utils/functions";

export default function VerticalList({ list, styles = {} }) {
  return (
    <ScrollView style={styles}>
      {list.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </ScrollView>
  );
}

const Card = React.memo(({ data }) => {
  //hooks
  const navigation = useNavigation();
  const setId = useId();

  //const
  const { id, img, ticketing, title } = useMemo(() => data);

  //handlers
  const handler = useCallback(() => setId(id, "offers", navigation), [id]);

  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View style={style.container}>
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
      </View>
    </TouchableWithoutFeedback>
  );
});

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.extra,
    borderRadius: 10,
    marginBottom: 5,
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
