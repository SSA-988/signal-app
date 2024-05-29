import {createContext, useContext, useEffect, useState} from 'react';
import io from 'socket.io-client';
import {AuthContext} from './AuthContext';

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({children}) => {
  const [socket, setSocket] = useState(null);
  const {authUser, userId} = useContext(AuthContext);

  console.log('auth', authUser)
  console.log('BABE', authUser);
  useEffect(() => {
    if (authUser) {
      const socket = io('http://localhost:3000', {
        query: {
          userId: userId,
        },
      });

      setSocket(socket);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []);

  return (
    <SocketContext.Provider value={{socket, setSocket}}>
      {children}
    </SocketContext.Provider>
  );
};
