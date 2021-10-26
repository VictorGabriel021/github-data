import { UserData } from "../../Context/UserDataContext";
import history from "./history";

export const saveSessionData = (userData: UserData) => {    
    localStorage.setItem('authData', JSON.stringify(userData));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') || '{}';
    const parsedSessionData = JSON.parse(sessionData);       
    
    return parsedSessionData as UserData;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();

    return sessionData.data;
}

export const logout = () => {
    localStorage.removeItem('authData');
    history.replace('/');
}

export const loginNewUser = (newUser: UserData) => {
    saveSessionData(newUser);
    history.replace('/home');
}