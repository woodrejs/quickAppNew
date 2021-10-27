import useModal from "./useModal";
import { createSchedule, deleteSchelude } from "../utils/strapi";
import { useSelector, useDispatch } from "react-redux";
import { setSchedules } from "../redux/user.slice";

export default function useSchedules(schedules) {
  const { setInfo, setStage } = useModal();
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const dispatch = useDispatch();

  return {
    createSchedule: async (obj) => {
      setStage("pending");
      try {
        const { data } = await createSchedule(obj, jwt);
        dispatch(setSchedules([...schedules, data]));

        setInfo(true, "Poprawnie dodano termin.");
      } catch (error) {
        setInfo(false, "Błąd podczas dodawania terminu.");
      }
    },
    deleteSchedule: async (id, date) => {
      setStage("pending");
      try {
        const { data } = await deleteSchelude(id, date, jwt);
        const updatedList = schedules.filter((item) => item._id !== data._id); //!!!
        dispatch(setSchedules(updatedList));

        setInfo(true, "Poprawnie usunięto termin.");
      } catch (error) {
        setInfo(false, "Błąd podczas usuwania terminu.");
      }
    },
  };
}
