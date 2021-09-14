import React, { useEffect } from "react";
import Navigation from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";
//screens
import Intro from "./screens/Intro";
//utils
import { customFonts } from "./style/fonts";
import { setListLoaded, setList } from "./redux/home.slice";
import {
  getPlacesCardsData,
  getOffersCardsData,
  getMainCardData,
} from "./utils/fetchFunctions";

const App = () => {
  const [isLoaded] = useFonts(customFonts); // move to redux-store ???
  const moviesIsLoaded = useSelector(({ homeSlice }) => homeSlice.movies.loaded);
  const playsIsLoaded = useSelector(({ homeSlice }) => homeSlice.plays.loaded);
  const booksIsLoaded = useSelector(({ homeSlice }) => homeSlice.books.loaded);
  const sportIsLoaded = useSelector(({ homeSlice }) => homeSlice.sport.loaded);
  const placesIsLoaded = useSelector(({ homeSlice }) => homeSlice.places.loaded);
  const mainIsLoaded = useSelector(({ homeSlice }) => homeSlice.main.loaded);

  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      //mainCard
      await cardInitialization(getMainCardData, "main", 5, 3, dispatch);
      //movies
      await cardInitialization(getOffersCardsData, "movies", 5, 1, dispatch);
      //plays
      await cardInitialization(getOffersCardsData, "plays", 5, 2, dispatch);
      //books
      await cardInitialization(getOffersCardsData, "books", 5, 7, dispatch);
      //sport
      await cardInitialization(getOffersCardsData, "sport", 5, 4, dispatch);
      //places
      await cardInitialization(getPlacesCardsData, "places", 5, null, dispatch);
    }
    init();
  }, []);

  return (
    <SafeAreaProvider>
      {moviesIsLoaded &&
      playsIsLoaded &&
      booksIsLoaded &&
      sportIsLoaded &&
      placesIsLoaded &&
      mainIsLoaded &&
      isLoaded ? (
        <Navigation />
      ) : (
        <Intro />
      )}
    </SafeAreaProvider>
  );
};
export default App;

//move to utils ???
async function cardInitialization(getFn, name, pageSize, types, dispatch) {
  try {
    const list = await getFn(pageSize, types);
    dispatch(setList([name, list]));
    dispatch(setListLoaded([name, true]));
  } catch (error) {
    console.log({ cardInitialization: error });
  }
}
