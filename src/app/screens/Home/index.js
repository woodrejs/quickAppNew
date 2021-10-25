import React from "react";
import { useSelector } from "react-redux";
import { Text, View, ScrollView, StyleSheet } from "react-native";
//components
import HorizontalRectangleList from "./HorizontalRectangleList";
import HorizontalSquareList from "./HorizontalSquareList";
import SearchSection from "../../components/SearchSection";
import VerticalList from "../../components/VerticalList";
import Icon from "../../components/Icon";
//styles
import { placesData, offersData } from "./index.data";
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";
import { mainData } from "./index.data";

export default React.memo(function Home() {
  const list = useSelector(({ listSlice }) => listSlice.recommended.list);

  return (
    <ScrollView style={style.container}>
      {/* Search Section */}
      <SearchSection />

      {/* Featured Categories Section*/}
      <TitleSection title="Popularne kategorie" />
      <HorizontalRectangleList list={mainData} />

      {/* Places Categories Section*/}
      <TitleSection title="Wybrane Miejsca" />
      <HorizontalSquareList list={placesData} />

      {/* Offers Categories Section*/}
      <TitleSection title="Wybrane Wydarzenia" />
      <HorizontalSquareList list={offersData} />

      {/* Offers Categories Section*/}
      <TitleSection title="polecane w tym tygodniu" />
      <VerticalList list={list} styles={style.verticalList} />
    </ScrollView>
  );
});

const TitleSection = React.memo(({ title }) => {
  return (
    <View style={style.titleContainer}>
      <Text style={style.titleText} children={title} />
      <Icon name="rightArrow" size={15} color={COLORS.extra} styles={style.titleIcon} />
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  titleIcon: { marginBottom: 10 },
  titleText: {
    ...STYLES.fonts.bold,
    fontSize: 18,
    textTransform: "capitalize",
    marginBottom: 10,
    marginTop: 30,
  },
  verticalList: { marginBottom: 50 },
});
