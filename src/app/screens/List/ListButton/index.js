import React, { useMemo } from "react";
import * as Progress from "react-native-progress";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../../../components/Icon";
//utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default React.memo(function ListButton({
  handler,
  icon,
  active = true,
  customStyle = {},
}) {
  //hooks
  const stage = useSelector(({ appSlice }) => appSlice.stage);

  //const
  const { dark, lightnest, extra } = useMemo(() => COLORS);
  const backgroundColor = useMemo(
    () => ({
      backgroundColor: active ? lightnest : extra,
    }),
    [active]
  );

  return (
    <TouchableOpacity onPress={handler} style={customStyle}>
      <View style={[style.container, backgroundColor]}>
        {stage === "waiting" && <Icon name={icon} size={26} />}
        {stage === "pending" && (
          <Progress.Circle size={30} indeterminate={true} color={dark} />
        )}
      </View>
    </TouchableOpacity>
  );
});

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
    ...STYLES.shadow,
  },
});
