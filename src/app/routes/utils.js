import React from "react";
import NavHeaderSection from "../components/NavHeaderSection";
import { screensNames } from "../utils/screensNames";

export const screenOptions = (route) => ({
  header: () => <NavHeaderSection route={route} screenName={screensNames.settings} />,
});
