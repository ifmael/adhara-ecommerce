import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { createElement } from "utils/request";
import { USERS_END_POINT } from "utils/constant/API";
import { INDEX } from "utils/constant/URL";
import { User } from "models";

const useSignUp = () => {
  const [signUpFields, setSignUpData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const setSignUpField = (value, name) => {
    setSignUpData({ ...signUpFields, [name]: value });
  };

  const signUpSubmitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        setIsLoading(true);
        const { name, lastName, email, password } = signUpFields;
        // Validate user data
        const newUser = User(name, lastName, email, password);
        const { status } = await createElement(newUser, USERS_END_POINT);

        if (status === 201) {
          setIsLoading(false);
          history.push(INDEX);
        } else {
          console.log("show eerro");
        }
      } catch (error) {
        // SHOW INFO MESSAGE
        console.error(error);
      }
    },
    [signUpFields, history]
  );

  return { signUpFields, setSignUpField, signUpSubmitHandler, isLoading };
};

export default useSignUp;
