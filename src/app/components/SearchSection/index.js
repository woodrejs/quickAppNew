import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TextInput } from "react-native";
//components
import ResetButton from "../ResetButton";
import ErrorText from "../ErrorText";
import SubmitButton from "./SubmitButton";
//utils
import useModal from "../../hooks/useModal";
import { SearchSchema } from "../../utils/strapi";
import { setData } from "../../redux/list.slice";
import { fetchItemList } from "../../utils/fetchFunctions";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import { screensNames } from "../../utils/screensNames";

//!!!important!!! add serach hooks
export default function SearchSection({ styles }) {
  console.log(styles);
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
    <View style={styles}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={SearchSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, handleReset }) => (
          <View style={style.container}>
            {/* Submit Button */}
            <SubmitButton submit={handleSubmit} />

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
            <ErrorText error={errors["search"]} />

            {/* Reset Button */}
            <ResetButton handleReset={handleReset} value={values["search"]} />
          </View>
        )}
      </Formik>
    </View>
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
  },
  input: { flex: 1, ...STYLES.fonts.regular, fontSize: 14 },
});
