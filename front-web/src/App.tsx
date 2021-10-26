import './app.scss';
import './core/assets/styles/custom.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import { NewUserDataContext, UserData, UserDataContext } from './Context/UserDataContext';
import { useState } from 'react';
import { getSessionData } from './core/utils/auth';

const App = () => {
  const [userData, setUserData] = useState<UserData>(getSessionData());
  const [newUserData, setNewUserData] = useState<UserData>(getSessionData());

  return (
    <>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <NewUserDataContext.Provider value={{ newUserData, setNewUserData }}>
          <Routes />
          <ToastContainer />
        </NewUserDataContext.Provider>
      </UserDataContext.Provider>
    </>
  );
}

export default App;
