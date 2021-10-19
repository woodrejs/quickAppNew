import { useDispatch } from "react-redux";
import { setError, setInfo } from "../redux/app.slice";

export default function useModal() {
  const dispatch = useDispatch();

  return [
    (stage, message) => dispatch(setInfo([stage, message])),
    (isOpen, message) => dispatch(setError(isOpen, message)),
  ];
}
