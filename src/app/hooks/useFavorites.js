import { createFavorite, deleteFavorite } from "../utils/strapi";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../redux/user.slice";
import useModal from "./useModal";

export default function useFavorites(favorites) {
  const { setInfo, setStage } = useModal();
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const dispatch = useDispatch();

  return {
    createFavorite: async (obj) => {
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
    deleteFavorite: async (id) => {
      setStage("pending");

      try {
        const { data } = await deleteFavorite(id, jwt);
        const updatedList = favorites.filter((item) => item.id !== `${id}`);
        dispatch(setFavorites(updatedList));

        setInfo(true, `"${data.title}" został usunięty z ulubionych.`);
      } catch (error) {
        setInfo(false, `Błąd podczas usuwania z servera. Spróbuj ponownie.`);
      }
    },
  };
}
