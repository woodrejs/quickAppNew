import React from "react";
import NavHeader from "../components/NavHeader";

export const screenOptions = (route) => ({
  header: () => <NavHeader route={route} />,
});

export const stacksNames = {
  authStackName: "authStackName",
  eventsStackName: "eventsStackName",
  favoritesStackName: "favoritesStackName",
  homeStackName: "homeStackName",
  scheduleStackName: "scheduleStackName",
  settingsStackName: "settingsStackName",
  placesStackName: "placesStackName",
};
export const screensName = {
  eventList: "eventList",
  eventSingle: "eventSingle",
  favoritesList: "favoritesList",
  home: "home",
  login: "login",
  placeList: "placeList",
  placeSingle: "placeSingle",
  register: "register",
  schedule: "schedule",
  settings: "settings",
};
