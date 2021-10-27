import React, { useMemo, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector } from "react-redux";
//components
import Icon from "../../../../components/Icon";
//utils
import useId from "../../../../hooks/useId";
import useSchedules from "../../../../hooks/useSchedules";
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";

export default React.memo(function ListItem({ data }) {
  //hooks
  const { schedules } = useSelector(({ userSlice }) => userSlice);
  const  {deleteSchedule} = useSchedules(schedules);
  const setId = useId();

  //const
  const { id, title, date, type } = useMemo(() => data);

  //handlers
  const handleDelete = useCallback(() => deleteSchedule(id, date), [id, date, schedules]);
  const handlePress = useCallback(() => setId(id, type));

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={style.titleBox}>
          <Text style={style.date}>{date.slice(0, 10)}</Text>
          <Text numberOfLines={2} style={style.title}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleDelete}>
        <View style={style.buttonBox}>
          <Icon name="cross" color={COLORS.grey} styles={style.button} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
});

const { width, height } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.light,
    borderRadius: 10,
    height: height / 9,
    width: "100%",
    marginBottom: 5,
    ...STYLES.shadow,
  },
  buttonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.extra,
    width: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: { ...STYLES.shadow },
  titleBox: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  date: { ...STYLES.fonts.bold, fontSize: 12 },
  title: { maxWidth: width - 100, ...STYLES.fonts.regular, fontSize: 14 },
});
