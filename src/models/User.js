import { v4 as uuidv4 } from "uuid";
import MD5 from "crypto-js/md5";

const User = (name = "", lastName = "", email = "", password = "") => ({
  id: uuidv4(),
  name,
  lastName,
  email,
  password: MD5(password).toString(),
});

export default User;
