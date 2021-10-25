import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";

export default React.memo(function Logo(props) {
  return (
    <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G filter="url(#prefix__filter0_d_6:1355)">
        <G filter="url(#prefix__filter1_d_6:1355)">
          <Circle cx={21.5} cy={19.5} r={15.5} fill="#FEFDFD" />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.149 25.686a7.793 7.793 0 10-8.847-12.705 7.793 7.793 0 108.847 12.705zm-1.278.54a7.842 7.842 0 001.278-.54A7.795 7.795 0 0017.3 12.98a7.795 7.795 0 007.57 13.246z"
          fill="#393943"
        />
        <Path fill="#393943" d="M15.64 10.173l12.262 17.563-.373.26-12.262-17.562z" />
      </G>
      <Defs></Defs>
    </Svg>
  );
})
