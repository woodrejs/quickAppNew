import useModal from "./useModal";
import { useSelector, useDispatch } from "react-redux";
import { userUpdate, userDelete } from "../utils/strapi";
import { setLoggedOut } from "../redux/user.slice";

export default function useUser() {
  const { setInfo, setStage } = useModal();
  const dispatch = useDispatch();

  const jwt = useSelector(({ userSlice }) => userSlice.jwt);

  return [
    //update user data
    async (val, variant) => {
      setStage("pending");

      const message =
        variant === "email"
          ? `Adres email został poprawnie zmieniony.`
          : `Nazwa użytkownika została poprawnie zmieniona.`;

      try {
        const resp = await userUpdate(val, jwt);
        setInfo("success", message);
      } catch (error) {
        setInfo("failed", `Błąd podczas zmiany danych użytkownika. Spróbuj ponownie.`);
      }
    },
    //delete user
    async () => {
      setStage("pending");
      try {
        const resp = await userDelete(jwt);
        dispatch(setLoggedOut());
        setInfo(true, `Konto zostało poprawnie usunięte.`);
      } catch (error) {
        setInfo(
          false,
          `Błąd podczas usuwania konta. Spróbuj ponownie lub skontaktuj się z administratorem strony.`
        );
      }
    },
  ];
}
