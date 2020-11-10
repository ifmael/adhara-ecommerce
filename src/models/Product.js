import { v4 as uuidv4 } from "uuid";

const Product = (name = "", department = "") => ({
  id: uuidv4(),
  name,
  department,
});

export default Product;
