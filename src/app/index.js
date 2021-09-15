import React, { useEffect } from "react";
import Navigation from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";
//screens
import Intro from "./screens/Intro";
//utils
import { customFonts } from "./style/fonts";
import { setList } from "./redux/home.slice";
import { fetchItemList, getMainCardData } from "./utils/fetchFunctions";

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
      const main = await getMainCardData(3, 5);
      dispatch(setList(["main", main]));

      //movies
      const movies = await fetchItemList("offers", 1, 1, 5); //fetchItemList(type, page, types, pageSize)
      dispatch(setList(["movies", movies]));

      //plays
      const plays = await fetchItemList("offers", 1, 2, 5);
      dispatch(setList(["plays", plays]));

      //books
      const books = await fetchItemList("offers", 1, 7, 5);
      dispatch(setList(["books", books]));

      //sport
      const sport = await fetchItemList("offers", 1, 4, 5);
      dispatch(setList(["sport", sport]));

      //places
      const places = await fetchItemList("places", 1, null, 5);
      dispatch(setList(["places", places]));
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
