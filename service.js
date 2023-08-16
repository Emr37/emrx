import AsyncStorage from "@react-native-async-storage/async-storage";
import { get, post, noTokenApi, api, put } from "./constants/config/axios";

export const apiURL = {
  exchange: "/exchanges",
  exchangeDetail: "/exchanges/",
  update: "/users/",
};

const noTokenApiURL = {
  login: "/auth/local",
  register: "/auth/local/register",
};

const getExchange = async () => await get(apiURL.exchange);

const getExchangeDetail = async (symbol) =>
  await get(apiURL.exchangeDetail + symbol);

const loginService = async (data) => {
  const response = await post(noTokenApiURL.login, data);

  if (response.success) {
    const jwt = response.data.jwt;
    api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

    AsyncStorage.setItem("jwt", jwt);
    AsyncStorage.setItem("user", JSON.stringify(response.data.user));

    console.log(jwt);

    return {
      status: true,
      user: response.data.user,
    };
  } else {
    return { status: false, error: "Hatalı kullanıcı adı veya şifre" };
  }
};

const registerService = async (data) => {
  console.log("RS---", data);
  const response = await noTokenApi.post(noTokenApiURL.register, data);

  console.log("RS---", response);
  console.log("RS---s", response.success);
  console.log("RS---d", response.data);
  console.log("RS---d.user", response.data.user);

  if (response.status === 200) {
    const jwt = response.data.jwt;
    api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

    AsyncStorage.setItem("jwt", jwt);
    AsyncStorage.setItem("user", JSON.stringify(response.data.user));

    return response.data.user;
  } else {
    return "Kullanıcı adı veya şifresi hatalı";
  }
};

const updateService = async (data) => {
  const response = await put(apiURL.update + data.id, data);
  //burada hata yapmışım
  if (response.success) {
    AsyncStorage.setItem("user", JSON.stringify(response.data));

    return {
      status: true,
      user: response.data,
    };
  } else {
    return { status: false, error: "Kullanıcı Hatası" };
  }
};

export {
  getExchange,
  getExchangeDetail,
  loginService,
  registerService,
  updateService,
};
