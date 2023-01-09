import FirebaseContextProvider from './firebase';
import UserContextProvider from './user';

const RootContextProvider = ({ children }) => (
  <UserContextProvider displayName="User">
    <FirebaseContextProvider displayName="Firebase">
      {children}
    </FirebaseContextProvider>
  </UserContextProvider>
);

export default RootContextProvider;
