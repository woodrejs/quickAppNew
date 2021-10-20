import React, { useEffect, useState } from "react";
import Navigation from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";
//screens
import Intro from "./screens/Intro";
import InfoModal from "./components/InfoModal";
import ErrorModal from "./components/ErrorModal";
//utils
import { customFonts } from "./style/fonts";
import { setData } from "./redux/list.slice";
import { getMainCardData } from "./utils/fetchFunctions";
import useModal from "./hooks/useModal";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded] = useFonts(customFonts);
  const [_, setError] = useModal();
  const { info, error } = useSelector(({ appSlice }) => appSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      try {
        setProgress(1 / 3);
        if (!isLoaded) return new Error("Nie udało się wczytać trzcionki.");
        setProgress(2 / 3);
        const recommended = await getMainCardData(3, 5);
        dispatch(setData(["recommended", recommended]));
        setProgress(1);
      } catch (error) {
        setError(true, "Błąd podczas ładowania aplikacji. Spróbuj ponownie.");
      }
    }

    init();
  }, [error.isOpen, isLoaded]);

  if (error.isOpen) return <ErrorModal />;
  if (progress < 1) return <Intro progress={progress} />;

  return (
    <SafeAreaProvider>
      <Navigation />
      {info.isOpen && <InfoModal />}
      {/* <LoadingSection /> */}
    </SafeAreaProvider>
  );
};
export default App;

/*!!!important!!!
add server error handlers
*/
// import React, { useEffect, useState } from "react";
// import Navigation from "./routes";
// import { useSelector, useDispatch } from "react-redux";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { useFonts } from "@use-expo/font";
// import { v4 as uuidv4 } from "uuid";
// //screens
// import Intro from "./screens/Intro";
// import InfoModal from "./components/InfoModal";
// import ErrorModal from "./components/ErrorModal";
// //utils
// import { customFonts } from "./style/fonts";
// import { setList } from "./redux/home.slice";
// import { fetchItemList, getMainCardData } from "./utils/fetchFunctions";
// import useError from "./hooks/useError";

// const lists = {
//   main: {
//     title: "main",
//     filters: [3],
//     id: uuidv4(),
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     variant: "offers",
//   },
//   movies: {
//     title: "filmy",
//     filters: [1],
//     id: uuidv4(),
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     variant: "offers",
//   },
//   plays: {
//     title: "sztuki",
//     filters: [2],
//     id: uuidv4(),
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     variant: "offers",
//   },
//   books: {
//     title: "ksiazki",
//     filters: [7],
//     id: uuidv4(),
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     variant: "offers",
//   },
//   sport: {
//     title: "sport",
//     filters: [4],
//     id: uuidv4(),
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     variant: "offers",
//   },
//   places: {
//     title: "miejsca",
//     filters: [],
//     id: uuidv4(),
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     variant: "places",
//   },
// };

// const App = () => {
//   const [progress, setProgress] = useState(0);
//   const [isLoaded] = useFonts(customFonts);
//   const { info, error } = useSelector(({ appSlice }) => appSlice);
//   const dispatch = useDispatch();
//   const setError = useError();

//   useEffect(() => {
//     async function init() {
//       try {
//         if (!isLoaded) return new Error("Nie udało się wczytać fontu.");
//         setProgress(1 / 7);
//         const main = await getMainCardData(3, 5);
//         // setProgress(2 / 7);
//         // const movies = await fetchItemList("offers", 0, [1], 5);
//         // setProgress(3 / 7);
//         // const plays = await fetchItemList("offers", 0, [2], 5);
//         // setProgress(4 / 7);
//         // const books = await fetchItemList("offers", 0, [7], 5);
//         // setProgress(5 / 7);
//         // const sport = await fetchItemList("offers", 0, [4], 5);
//         // setProgress(6 / 7);
//         // const places = await fetchItemList("places", 0, [], 5);
//         setProgress(1);

//         dispatch(
//           setList({
//             main: { list: [...main], ...lists.main },
//             // movies: { list: [...movies], ...lists.movies },
//             // plays: { list: [...plays], ...lists.plays },
//             // books: { list: [...books], ...lists.books },
//             // sport: { list: [...sport], ...lists.sport },
//             // places: { list: [...places], ...lists.places },
//           })
//         );
//       } catch (error) {
//         setError(true, "Błąd podczas ładowania aplikacji. Spróbuj ponownie.");
//       }
//     }

//     init();
//   }, [error.isOpen, isLoaded]);

//   if (error.isOpen) return <ErrorModal />;
//   if (progress < 1) return <Intro progress={progress} />;

//   return (
//     <SafeAreaProvider>
//       <Navigation />
//       {info.isOpen && <InfoModal />}
//     </SafeAreaProvider>
//   );
// };
// export default App;

// /*!!!important!!!
// add server error handlers
// */
