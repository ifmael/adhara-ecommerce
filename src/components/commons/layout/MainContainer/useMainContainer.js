import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useIsAuthenticated from "utils/hooks/useIsAuthenticated";
import { INDEX } from "utils/constant/URL";

const useMainContainer = () => {
  const [currentUser, setCurrentUser] = useState();
  const {
    authenticated,
    isLoading: isLoadingCurrentUser,
  } = useIsAuthenticated();

  // CURRENT USER
  const history = useHistory();

  useEffect(() => {
    if (isLoadingCurrentUser) return;

    authenticated ? setCurrentUser(authenticated) : history.push(INDEX);
  }, [authenticated, isLoadingCurrentUser, history]);

  return { currentUser, isLoadingCurrentUser };
};

export default useMainContainer;
