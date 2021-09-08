import React from "react";
import { Text, ScrollView, View } from "react-native";

import LargeEventCard from "../../components/LargeEventCard";
import ScheduleEventCard from "../../components/ScheduleEventCard";
import HorizontalCardList from "../../components/HorizontalCardList";
import ScreenTitleSection from "../../components/ScreenTitleSection";
import { style } from "./index.style";

const Home = () => {
  return (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Witaj w Quick Week App"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <LargeEventCard />
      <ScheduleEventCard />
      <Text style={style.subTitle}>Odkryj teraz</Text>
      <HorizontalCardList name="Wydarzenia" />
      <HorizontalCardList name="Miejsca" />
      <Text style={style.subTitle}>Wrocław</Text>
      <Text style={style.label}>Miasto Spotkań</Text>
      <Text style={style.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      </Text>
      <HorizontalCardList name="Największe atrakcje" />
      <View style={style.footer} />
    </ScrollView>
  );
};
export default Home;
