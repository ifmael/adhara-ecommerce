import { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useIsAuthenticated from "utils/hooks/useIsAuthenticated";
import { authSignIn } from "utils/request";
import { CUSTOMERS } from "utils/constant/URL";

const useSignIn = () => {
  const [signInFields, setSignInData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { authenticated } = useIsAuthenticated();
  const history = useHistory();

  const setSignInField = (value, name) => {
    setSignInData({ ...signInFields, [name]: value });
  };

  const signInHandler = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        setIsLoading(true);
        await authSignIn(signInFields);

        history.push(CUSTOMERS);
      } catch (error) {
        console.error(error);
      }
    },
    [signInFields, history]
  );

  useEffect(() => {
    if (authenticated) {
      // Save in the context
      history.push(CUSTOMERS);
    }
  }, [authenticated, history]);

  return { signInFields, setSignInField, signInHandler, isLoading };
};

export default useSignIn;
