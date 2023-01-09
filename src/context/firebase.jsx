import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { useState, createContext, useMemo, useCallback } from 'react';

export const FirebaseContext = createContext();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const FirebaseContextProvider = ({ children, displayName }) => {
  const [state, setState] = useState({
    loaded: false,
    app: false,
    analytics: false
  });
  const init = useCallback(() => {
    if (!state) return false;
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    setState({
      loaded: true,
      app,
      analytics
    });
    return true;
  }, [state]);
  const value = useMemo(() => ({ state, init }), [state, init]);
  return (
    <FirebaseContext.Provider value={value} displayName={displayName}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseContextProvider.defaultProps = {
  displayName: 'FirebaseContext'
};

export default FirebaseContextProvider;
