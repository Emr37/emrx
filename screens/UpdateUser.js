import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contextApi/useAuth";
import * as yup from "yup";
import { useFormik } from "formik";
import { updateService } from "../service";
import UpdateInput from "../components/UpdateInput";

const UpdateShcema = yup.object().shape({
  username: yup
    .string()
    .typeError("Kullanıcı adınız harf veya rakam içermelidir.")
    .min(3, "Kullanıcı adınız en az 3 karakter olmalıdır.")
    .max(32, "Kullanıcı adınız en fazla 32 karakter olmalıdır.")
    .required("Lütfen kullanıcı adınızı giriniz."),
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("Lütfen e-posta adresinizi giriniz."),
  phone: yup.number(),
  gender: yup.string(),
  birthday: yup.date(),
});

const showToast = () => {
  ToastAndroid.showWithGravity(
    "Bilgileriniz Kaydedildi",
    3000,
    ToastAndroid.CENTER
  );
};

const UpdateScreen = () => {
  const { navigate } = useNavigation();
  const { setUser, user } = useContext(useAuth);

  const formik = useFormik({
    initialValues: {
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user?.phone,
      gender: user?.gender,
      birthday: user?.birthday,
    },
    validationSchema: UpdateShcema,
    onSubmit: async (values) => {
      const user = await updateService(values);

      // Buraya bir bak. user.user değişebilir mi????
      setUser(user.user);
      navigate("About");
      showToast();
    },
  });
  //console.log("Update Screen", values);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View>
          <UpdateInput
            label={"Kullanıcı Adı"}
            lowerCase
            error={
              formik.errors.username && formik.touched.username
                ? formik.errors.username
                : null
            }
            value={formik.values.username}
            setValue={(text) => formik.setFieldValue("username", text)}
          />
          <UpdateInput
            label={"Telefon Numarası"}
            lowerCase
            error={
              formik.errors.phone && formik.touched.phone
                ? formik.errors.phone
                : null
            }
            value={formik.values.phone}
            setValue={(text) => formik.setFieldValue("phone", text)}
          />
          <UpdateInput
            label={"Cinsiyet"}
            lowerCase
            error={
              formik.errors.gender && formik.touched.gender
                ? formik.errors.gender
                : null
            }
            value={formik.values.gender}
            setValue={(text) => formik.setFieldValue("gender", text)}
          />
          <UpdateInput
            label={"Doğum Tarihi(Yıl-Ay-Gün)"}
            lowerCase
            error={
              formik.errors.birthday && formik.touched.birthday
                ? formik.errors.birthday
                : null
            }
            value={formik.values.birthday}
            setValue={(text) => formik.setFieldValue("birthday", text)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              formik.handleSubmit();
            }}
          >
            <Text style={styles.buttonText}>Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("About")}
          >
            <Text style={styles.buttonText}>İptal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#6592C9",
    height: 60,
    borderRadius: 8,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
});
