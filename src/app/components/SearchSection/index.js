import React from "react";
import { Formik } from "formik";
import * as Progress from "react-native-progress";
import { useDispatch, useSelector } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
//components
import Icon from "../Icon";
//utils
import useModal from "../../hooks/useModal";
import { SearchSchema } from "../../utils/strapi";
import { setData } from "../../redux/list.slice";
import { fetchItemList } from "../../utils/fetchFunctions";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import { screensNames } from "../../utils/screensNames";

//!!!important!!! add serach hooks
export default function SearchSection() {
  //hooks
  const { setInfo, setStage } = useModal();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  //handlers
  const handleOnSubmit = async (values, { resetForm }) => {
    setStage("pending");
    try {
      const search = await fetchItemList("offers", 0, [], 20, values.search);
      dispatch(setData(["search", search]));
      resetForm({ search: "" });

      setStage("waiting");

      if (route.name === "start") {
        navigation.navigate(screensNames.search);
      }
    } catch (error) {
      setStage("waiting");
      setInfo(false, "Błąd podczas wyszukiwania.");
    }
  };

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={SearchSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, handleReset }) => (
        <View style={style.container}>
          {/* Submit Button */}
          <SubmitButton handler={handleSubmit} />

          {/* Search Input */}
          <TextInput
            name="search"
            style={style.input}
            onChangeText={handleChange("search")}
            onBlur={handleBlur("search")}
            value={values.search}
            placeholder="Znajdź miejsce lub wydarzenie"
            placeholderTextColor={COLORS.grey}
          />
          {/* Error Text */}
          {errors && <Text style={style.error} children={errors.search} />}

          {/* Clear Button */}
          <ClearButton handler={handleReset} />
        </View>
      )}
    </Formik>
  );
}
function ClearButton({ handler }) {
  return (
    <TouchableOpacity style={style.clear} onPress={handler}>
      <Icon name="cross" size={18} color={COLORS.grey} />
    </TouchableOpacity>
  );
}
function SubmitButton({ handler }) {
  const { stage } = useSelector(({ appSlice }) => appSlice);

  return (
    <TouchableOpacity style={style.submit} onPress={handler}>
      {stage === "waiting" ? (
        <Icon name="search" size={30} color={COLORS.extra} />
      ) : (
        <Progress.Circle size={26} indeterminate={true} color={COLORS.extra} />
      )}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    ...STYLES.shadow,
    backgroundColor: COLORS.lightnest,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  submit: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    paddingHorizontal: 10,
  },
  input: { flex: 1, ...STYLES.fonts.regular, fontSize: 14 },
  clear: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    paddingHorizontal: 15,
  },
  error: {
    ...STYLES.fonts.bold,
    fontSize: 11,
    color: COLORS.warning,
    position: "absolute",
    bottom: -20,
  },
});
