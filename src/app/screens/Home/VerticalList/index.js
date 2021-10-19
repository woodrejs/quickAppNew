import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
//components
import Badge from "../Badge";
//utils & styles
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import { getTicketingTitle } from "../../../utils/functions";

export default function VerticalList({ styles = {} }) {
  const { list } = useSelector((state) => state.homeSlice.lists.main);

  return (
    <ScrollView style={styles}>
      {list.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </ScrollView>
  );
}
function Card({ data }) {
  const { img, ticketing, title } = data;
  const handler = () => console.log("handler");
  
  return (
    <TouchableOpacity style={style.container} onPress={handler}>
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
    </TouchableOpacity>
  );
}

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
    borderRadius: 10,
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
