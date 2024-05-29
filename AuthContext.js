import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import {createContext, useState, useEffect} from 'react';
import 'core-js/stable/atob';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [authUser, setAuthUser] = useState(
    AsyncStorage.getItem('authToken') || null,
  );
  console.log("BABE AU",authUser)
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwtDecode(token);
      setToken(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{token, userId, setToken, setUserId,authUser,setAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
