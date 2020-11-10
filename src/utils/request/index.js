import http from "utils/request/http-commons";
import { v4 as uuidv4 } from "uuid";
import MD5 from "crypto-js/md5";
import Cookies from "universal-cookie";
import { USERS_END_POINT } from "utils/constant/API";

export const createElement = (data, endPoint, typeServer = "rest") => {
  return new Promise(async (resolve, reject) => {
    try {
      if (typeServer === "rest") {
        const response = await http.post(
          endPoint,
          endPoint === USERS_END_POINT ? { ...data, token: uuidv4() } : data
        );
        resolve(response);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const removeElement = (id, endPoint, typeServer = "rest") => {
  return new Promise(async (resolve, reject) => {
    try {
      if (typeServer === "rest") {
        const { status, statusText } = await http.delete(`${endPoint}/${id}`);
        status === 200 && statusText === "OK" ? resolve(true) : reject(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const updateElement = (id, data, endPoint, typeServer = "rest") => {
  return new Promise(async (resolve, reject) => {
    try {
      if (typeServer === "rest") {
        const { status, statusText } = await http.put(
          `${endPoint}/${id}`,
          data
        );
        status === 200 && statusText === "OK" ? resolve(true) : reject(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getListOfElements = (endPoint, typeServer = "rest") => {
  return new Promise(async (resolve, reject) => {
    try {
      if (typeServer === "rest") {
        const { data: response, status, statusText } = await http.get(endPoint);

        status === 200 && statusText === "OK"
          ? resolve(response)
          : reject("KO");
        resolve(response);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const authSignIn = ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await http.get(`${USERS_END_POINT}?email=${email}`);
      const [user] = data;
      if (MD5(password).toString() === user.password) {
        const cookies = new Cookies();
        cookies.set("email", user.email);
        cookies.set("token", user.token);
        resolve(user);
      } else {
        reject("ko");
      }

      resolve("oke");
    } catch (error) {
      reject(error);
    }
  });
};

export const checkCurrentUser = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cookies = new Cookies();
      const token = cookies.get("token");
      const { data, status, statusText } = await http.get(
        `${USERS_END_POINT}?email=${email}`
      );

      if (status === 200 && statusText === "OK") {
        const [user] = data;
        return user.token === token ? resolve(user) : resolve(false);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
