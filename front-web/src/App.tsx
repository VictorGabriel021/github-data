import './App.scss';
import './core/assets/styles/custom.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
