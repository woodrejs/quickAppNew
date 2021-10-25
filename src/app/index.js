import React, { useEffect, useState } from "react";
import Navigation from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";
//screens
import Intro from "./screens/Intro";
import LoadingModal from "./components/LoadingModal";
import InfoModal from "./components/InfoModal";
import ErrorModal from "./components/ErrorModal";
//utils
import { customFonts } from "./style/fonts";
import { setData } from "./redux/list.slice";
import { getMainCardData } from "./utils/fetchFunctions";
import useModal from "./hooks/useModal";
import { COLORS } from "./style/colors";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded] = useFonts(customFonts);
  const { setError } = useModal();
  const error = useSelector(({ appSlice }) => appSlice.error);
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      try {
        if (!isLoaded) return new Error("Nie udało się wczytać trzcionki.");

        const recommended = await getMainCardData(3, 5);
        dispatch(setData(["recommended", recommended]));
        setProgress(1);
      } catch (error) {
        setError("Błąd podczas ładowania aplikacji. Spróbuj ponownie.");
      }
    }

    init();
  }, [error.isOpen, isLoaded]);

  if (error.isOpen) return <ErrorModal />;

  return (
    <SafeAreaProvider style={{ backgroundColor: COLORS.extra }}>
      {progress < 1 ? <Intro progress={progress} /> : <Navigation />}
      <InfoModal />
      <LoadingModal />
    </SafeAreaProvider>
  );
};
export default App;
