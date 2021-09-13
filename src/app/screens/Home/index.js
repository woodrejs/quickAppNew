import React from "react";
import { Text, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
//components
import LargeEventCard from "../../components/LargeEventCard";
import ScheduleEventCard from "../../components/ScheduleEventCard";
import HorizontalCardList from "../../components/HorizontalCardList";
import ScreenTitleSection from "../../components/ScreenTitleSection";
//styles
import { style } from "./index.style";

const Home = () => {
  const moviesData = useSelector((state) => state.homeSlice.movies.list);
  const playsData = useSelector((state) => state.homeSlice.plays.list);
  const placesData = useSelector((state) => state.homeSlice.places.list);
  const booksData = useSelector((state) => state.homeSlice.books.list);
  const sportData = useSelector((state) => state.homeSlice.sport.list);
  const mainData = useSelector((state) => state.homeSlice.main.list);

  return (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Witaj w Quick Week App"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <LargeEventCard data={mainData} />
      <ScheduleEventCard />
      <Text style={style.subTitle}>Odkryj teraz</Text>
      <HorizontalCardList name="Filmy" data={moviesData} />
      <HorizontalCardList name="Sztuki" data={playsData} />
      <HorizontalCardList name="Książki" data={booksData} />
      <HorizontalCardList name="Sport" data={sportData} />
      <Text style={style.subTitle}>Wrocław</Text>
      <Text style={style.label}>Miasto Spotkań</Text>
      <Text style={style.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      </Text>
      <HorizontalCardList name="Miejsca" data={placesData} />
      <View style={style.footer} />
    </ScrollView>
  );
};
export default Home;
