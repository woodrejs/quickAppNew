import React, { useEffect, useState } from "react";
import Navigation from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";

//screens
import LoadingModal from "./components/LoadingModal";
import InfoModal from "./components/InfoModal";
import ErrorModal from "./components/ErrorModal";
//utils
import useModal from "./hooks/useModal";
import { customFonts } from "./style/fonts";
import { setData } from "./redux/list.slice";
import { getMainCardData } from "./utils/fetchFunctions";
import { COLORS } from "./style/colors";
import { setStage } from "./redux/app.slice";

const App = () => {
  //hooks
  const [appLoaded, setAppLoaded] = useState(false);
  const [isLoaded] = useFonts(customFonts);
  const { setError } = useModal();
  const error = useSelector(({ appSlice }) => appSlice.error);
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      dispatch(setStage("pending"));
      try {
        if (!isLoaded) return new Error("Nie udało się wczytać trzcionki.");
        const recommended = await getMainCardData(3, 5);
        dispatch(setData(["recommended", recommended]));
        dispatch(setStage("waiting"));
        setAppLoaded(true);
      } catch (error) {
        dispatch(setStage("waiting"));
        setError("Błąd podczas ładowania aplikacji. Spróbuj ponownie.");
      }
    }

    init();
  }, [error.isOpen, isLoaded]);

  if (error.isOpen) return <ErrorModal />;
  if (!appLoaded) return <LoadingModal />;

  return (
    <SafeAreaProvider style={{ backgroundColor: COLORS.extra }}>
      <Navigation />
      <InfoModal />
      <LoadingModal />
    </SafeAreaProvider>
  );
};
export default App;
