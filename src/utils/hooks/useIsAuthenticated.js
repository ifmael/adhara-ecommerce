import { useEffect, useState } from "react";

import Cookies from "universal-cookie";
import { checkCurrentUser } from "utils/request";

const useIsAuthenticated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const cookies = new Cookies();
        const userEmail = cookies.get("email");
        if (userEmail) {
          const auhtenticated = await checkCurrentUser(userEmail);

          auhtenticated
            ? setAuthenticated(auhtenticated)
            : setAuthenticated(false);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setAuthenticated(false);
        setIsLoading(false);
        console.error(error);
      }
    };

    checkUser();
  }, []);

  return { authenticated, isLoading };
};

export default useIsAuthenticated;
