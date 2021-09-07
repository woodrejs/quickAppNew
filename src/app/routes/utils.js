import React from "react";
import NavHeader from "../components/NavHeader";
import { screensNames } from "../utils/screensNames";

export const screenOptions = (route) => ({
  header: () => <NavHeader route={route} screenName={screensNames.settings} />,
});
