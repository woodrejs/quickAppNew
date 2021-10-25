import { useState } from "react";

export default function useDate() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  return [
    date,
    show,
    mode,
    //set date
    async (event) => {
      setDate(event.nativeEvent.timestamp);
    },
    //set show
    (bool) => {
      setShow(bool);
    },
    //set mode
    (option) => {
      setMode(option);
    },
  ];
}
