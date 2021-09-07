import React from "react";

//components
import HomeStack from "./homeStack";
import EventsStack from "./eventsStack";
import PlacesStack from "./placesStack";
import ScheduleStack from "./scheduleStack";
import FavoritesStack from "./favoritesStack";
import AuthStack from "./authStack";
import SettingsStack from "./settingsStack";

//utils
import { v4 as uuidv4 } from "uuid";
import { stacksNames } from "../utils/stacksNames";
import { COLORS } from "../style/colors";

//icons
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

export const Stacks = [
  {
    name: stacksNames.home,
    id: uuidv4(),
    icon: () => <Entypo name="home" size={24} color={COLORS.black} />,
    component: HomeStack,
  },
  {
    name: stacksNames.favorites,
    id: uuidv4(),
    icon: () => <AntDesign name="heart" size={20} color={COLORS.black} />,
    component: FavoritesStack,
  },
  {
    name: stacksNames.places,
    id: uuidv4(),
    icon: () => <MaterialIcons name="place" size={24} color={COLORS.black} />,
    component: PlacesStack,
  },
  {
    name: stacksNames.events,
    id: uuidv4(),
    icon: () => <Ionicons name="people" size={24} color={COLORS.black} />,
    component: EventsStack,
  },
  {
    name: stacksNames.schedule,
    id: uuidv4(),
    icon: () => <Entypo name="calendar" size={22} color={COLORS.black} />,
    component: ScheduleStack,
  },
  {
    name: stacksNames.settings,
    id: uuidv4(),
    icon: () => <FontAwesome name="gear" size={24} color={COLORS.black} />,
    component: SettingsStack,
  },
  {
    name: stacksNames.auth,
    id: uuidv4(),
    icon: () => <Entypo name="lock" size={24} color={COLORS.black} />,
    component: AuthStack,
  },
];
