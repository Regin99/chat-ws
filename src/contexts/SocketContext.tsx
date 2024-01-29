import { ReactNode, createContext, useEffect, useRef, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export const SocketContext = createContext<{
  ws: React.MutableRefObject<Socket | null>;
  isConnected: boolean;
}>({ ws: { current: null }, isConnected: false });

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);

  const ws = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io('wss://chat-ws-server.onrender.com');

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    ws.current = socket;

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ ws, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
