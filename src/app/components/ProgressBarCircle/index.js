import React from "react";
import * as Progress from "react-native-progress";

const ProgressBarCircle = ({ progress, size }) => {
  return <Progress.Pie progress={progress} size={size} />;
};

export default ProgressBarCircle;
