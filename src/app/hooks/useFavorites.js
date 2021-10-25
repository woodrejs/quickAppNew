import { createFavorite, deleteFavorite } from "../utils/strapi";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../redux/user.slice";
import useModal from "./useModal";

export default function useFavorites() {
  const { setInfo, setStage } = useModal();
  const { jwt, favorites } = useSelector(({ userSlice }) => userSlice);
  const dispatch = useDispatch();

  return [
    favorites,
    //createFavorite
    async (obj) => {
      setStage("pending");

      try {
        const { data } = await createFavorite(obj, jwt);
        const updatedList = [...favorites, data];
        dispatch(setFavorites(updatedList));
        setInfo(true, `"${obj.title}" został dodany do ulubionych.`);
      } catch (error) {
        setInfo(false, `Błąd podczas dodawania "${obj.title}". Spróbuj ponownie.`);
      }
    },
    //deleteFavorite
    async (id) => {
      setStage("pending");

      try {
        const { data } = await deleteFavorite(id, jwt);
        const { id: deletedID, title } = data;
        const updatedList = favorites.filter((item) => item.id !== `${deletedID}`);
        dispatch(setFavorites(updatedList));
        setInfo(true, `"${title}" został usunięty z ulubionych.`);
      } catch (error) {
        setInfo(false, `Błąd podczas usuwania z servera. Spróbuj ponownie.`);
      }
    },
  ];
}
