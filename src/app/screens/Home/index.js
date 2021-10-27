import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, StyleSheet } from "react-native";
//components
import HorizontalRectangleList from "./HorizontalRectangleList";
import HorizontalSquareList from "./HorizontalSquareList";
import TitleSection from "./TitleSection";
import SearchSection from "../../components/SearchSection";
import VerticalList from "../../components/VerticalList";
//styles
import { placesData, offersData } from "./index.data";
import { mainData } from "./index.data";

export default React.memo(function Home() {
  const list = useSelector(({ listSlice }) => listSlice.recommended.list);

  return (
    <ScrollView style={style.container}>
      {/* Search Section */}
      <SearchSection styles={style.search} />

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

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingVertical: 10,
  },
  search: { paddingHorizontal: 10, marginTop: 30 },
  verticalList: { marginBottom: 50, paddingHorizontal: 10 },
});
