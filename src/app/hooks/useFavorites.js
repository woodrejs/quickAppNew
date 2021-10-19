import { createFavorite, deleteFavorite } from "../utils/strapi";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../redux/user.slice";
import useModal from "./useModal";

export default function useFavorites() {
  const [setInfo] = useModal();
  const { jwt, favorites } = useSelector(({ userSlice }) => userSlice);
  const dispatch = useDispatch();

  return [
    favorites,
    //createFavorite
    async (data) => {
      setInfo("pending");

      try {
        const createdObj = await createFavorite(data, jwt);
        const updatedList = [...favorites, createdObj];
        dispatch(setFavorites(updatedList));
        setInfo("success", `"${data.title}" został dodany do ulubionych.`);
      } catch (error) {
        setInfo("failed", `Błąd podczas dodawania "${data.title}". Spróbuj ponownie.`);
      }
    },
    //deleteFavorite
    async (id) => {
      setInfo("pending");

      try {
        const { id: deletedID, title } = await deleteFavorite(id, jwt);
        const updatedList = favorites.filter((item) => item.id !== `${deletedID}`);
        dispatch(setFavorites(updatedList));
        setInfo("success", `"${title}" został usunięty z ulubionych.`);
      } catch (error) {
        setInfo("failed", `Błąd podczas usuwania z servera. Spróbuj ponownie.`);
      }
    },
  ];
}
