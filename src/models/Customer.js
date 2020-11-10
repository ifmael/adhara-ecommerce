import { v4 as uuidv4 } from "uuid";

const Customer = (
  name = "",
  lastName = "",
  email = "",
  phone = "",
  address = ""
) => ({
  id: uuidv4(),
  name,
  lastName,
  email,
  phone,
  address,
});

export default Customer;
