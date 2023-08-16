import { ToastAndroid } from "react-native";

export const showToast = () => {
  ToastAndroid.showWithGravity(
    "Bilgileriniz Kaydedildi",
    3000,
    ToastAndroid.CENTER
  );
};
