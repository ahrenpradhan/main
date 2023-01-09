import { useState, createContext, useMemo, useCallback } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children, displayName }) => {
  const [user, setUser] = useState({
    loaded: false
  });
  const init = useCallback(() => {
    if (user) return;
    setUser({
      loaded: true
    });
  }, [user]);
  const value = useMemo(
    () => ({
      user,
      init
    }),
    [user, init]
  );
  return (
    <UserContext.Provider value={value} displayName={displayName}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.defaultProps = {
  displayName: 'UserContext'
};

export default UserContextProvider;
