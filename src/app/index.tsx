import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";

import Navigation from "./routes";
import Intro from "./screens/Intro";
import { customFonts } from "./style/fonts";

const App = () => {
  const [isLoaded] = useFonts(customFonts);

  return <SafeAreaProvider>{isLoaded ? <Navigation /> : <Intro />}</SafeAreaProvider>;
};
export default App;
