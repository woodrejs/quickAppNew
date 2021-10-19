import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../utils/strapi";
import { setLoggedIn, setLoggedOut } from "../redux/user.slice";
import { stacksNames } from "../utils/stacksNames";
import useModal from "./useModal";

//!!!important!!! setLoggedIn & setLoggedOut in one function
export default function useAuth() {
  const [user, setUser] = useState(null);
  const [setInfo] = useModal();
  const dispatch = useDispatch();

  return [
    user,
    //login
    async (email, password, navigation) => {
      setInfo("pending");

      try {
        const resp = await userLogin(email, password);
        setUser(resp.user);

        dispatch(setLoggedIn(resp.jwt));
        setInfo("success", `${resp.user.username} witaj w quick week app.`);
        navigation.navigate(stacksNames.home);
      } catch (error) {
        setInfo("failed", `Błąd podczas logowania. Spróbuj ponownie.`);
      }
    },
    //logout
    (navigation) => {
      dispatch(setLoggedOut());
      navigation.navigate(stacksNames.home);
      setInfo("success", "Zostałeś poprawnie wylogowany.");
    },
    //register
    async (username, email, password, navigation) => {
      console.log({ username, email, password, navigation });
      setInfo("pending");
      try {
        const { jwt, user } = await userRegister(username, email, password);

        dispatch(setLoggedIn(jwt));
        setInfo("success", `Witaj ${user.username}, Twoje konto zostało utworzone.`);
        navigation.navigate(stacksNames.home);
      } catch (error) {
        setInfo("failed", `Błąd podczas rejestracji. Spróbuj ponownie.`);
      }
    },
  ];
}

// export default function useLoginUser() {
//   const dispatch = useDispatch();
//   const setInfo = useInfo();
//   return async (email, password, navigation) => {
//     setInfo("pending");
//     try {
//       const { jwt, user } = await userLogin(email, password);

//       const { avatar, favorites, username } = user;

//       if (avatar.id && jwt) {
//         const { public_id, url } = await findOneAvatar(avatar.id, jwt);
//         dispatch(setAvatar({ public_id, url }));
//       }

//       const formatedFavorites = favorites.map(({ uid, type, img, title }) => ({
//         id: uid,
//         type,
//         img,
//         title,
//       }));

//       dispatch(setFavorites(formatedFavorites));
//       dispatch(setLoggedIn(jwt));
//       setInfo("success", `${username} witaj w quick week app.`);
//       navigation.navigate(stacksNames.home);
//     } catch (error) {
//       setInfo("failed", `Błąd podczas logowania. Spróbuj ponownie.`);
//     }
//   };
// }
