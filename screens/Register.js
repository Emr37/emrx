import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginInput from "../components/LoginInput";
import EMailIcon from "../constants/icons/email";
import Password from "../constants/icons/password";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { useFormik } from "formik";
import UserIcon from "../constants/icons/user";
import { registerService } from "../service";
import { useAuth } from "../contextApi/useAuth";
import { showToast } from "../utils/toast";

//yup ve formik kullanıldı.

const RegisterShcema = yup.object().shape({
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
  password: yup
    .string()
    .typeError("Şifreniz harf veya rakam içermelidir.")
    .min(6, "Şifreniz en az 6 karakter olmalıdır.")
    .max(32, "Şifreniz en fazla 32 karakter olmalıdır.")
    .required("Lütfen şifrenizi giriniz."),
  confirmPassword: yup
    .string()
    .required("Lütfen şifrenizi tekrar giriniz.")
    .oneOf([yup.ref("password"), null], "Şifreleriniz eşleşmiyor."),
});

const RegisterScreen = () => {
  const { navigate } = useNavigation();
  const { setUser } = useContext(useAuth);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterShcema,
    onSubmit: async (values) => {
      console.log("Register Screen-1", values);

      const user = await registerService(values);
      if (user) {
        console.log("Register Screen-2", user);
        setUser(user);
        showToast();
        navigate("Main");
        console.log("Register Screen 3");
      }
    },
  });

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image source={require("../assets/login.png")} />
        <Text style={styles.title}>Kayıt Ol</Text>

        <LoginInput
          error={
            formik.errors.username && formik.touched.username
              ? formik.errors.username
              : null
          }
          placeholder="Kullanıcı Adı"
          leftIcon={
            <UserIcon
              size={18}
              color={
                formik.errors.username && formik.touched.username
                  ? "#f00"
                  : "#6592C9"
              }
            />
          }
          value={formik.values.username}
          setValue={(text) => formik.setFieldValue("username", text)}
        />
        <LoginInput
          error={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
          placeholder="E-Posta Adresi"
          leftIcon={
            <EMailIcon
              size={18}
              color={
                formik.errors.email && formik.touched.email ? "#f00" : "#6592C9"
              }
            />
          }
          value={formik.values.email}
          setValue={(text) => formik.setFieldValue("email", text)}
        />

        <LoginInput
          secure
          error={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null
          }
          placeholder="Şifre"
          leftIcon={
            <Password
              size={18}
              color={
                formik.errors.password && formik.touched.password
                  ? "#f00"
                  : "#6592C9"
              }
            />
          }
          value={formik.values.password}
          setValue={(text) => formik.setFieldValue("password", text)}
        />

        <LoginInput
          secure
          error={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
          placeholder="Şifre Tekrar"
          leftIcon={
            <Password
              size={18}
              color={
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "#f00"
                  : "#6592C9"
              }
            />
          }
          value={formik.values.confirmPassword}
          setValue={(text) => formik.setFieldValue("confirmPassword", text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => formik.handleSubmit()}
        >
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Login")}>
          <Text style={styles.registerButton}>Giriş Yap</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#6592C9",
    width: "100%",
    paddingBottom: 24,
  },
  button: {
    backgroundColor: "#6592C9",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 48,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  registerButton: {
    color: "#6592C9",
    fontSize: 16,
    padding: 16,
    marginTop: 16,
  },
});
