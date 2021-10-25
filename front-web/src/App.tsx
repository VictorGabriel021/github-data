import './app.scss';
import './core/assets/styles/custom.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import { UserData, UserDataContext } from './Context/UserDataContext';
import { useState } from 'react';
import { getSessionData } from './core/utils/auth';

const App = () => {
  const [userData, setUserData] = useState<UserData>(getSessionData());

  return (
    <>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <Routes />
        <ToastContainer />
      </UserDataContext.Provider>
    </>
  );
}

export default App;
