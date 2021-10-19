import useModal from "./useModal";
import { useSelector } from "react-redux";
import { userUpdate, userDelete } from "../utils/strapi";
import { setLoggedOut } from "../redux/user.slice";

export default function useUser() {
  const [setInfo] = useModal();
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);

  return [
    //update user data
    async (val, variant) => {
      setInfo("pending");

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
      setInfo("pending");
      try {
        await userDelete(jwt);
        dispath(setLoggedOut());
        //!!!important!!! delete avatar from cloudinay
        setInfo("success", `Konto zostało poprawnie usunięte.`);
      } catch (error) {
        setInfo(
          "failed",
          `Błąd podczas usuwania konta. Spróbuj ponownie lub skontaktuj się z administratorem strony.`
        );
      }
    },
  ];
}
