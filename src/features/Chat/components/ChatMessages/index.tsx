import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SocketContext } from '../../../../contexts/SocketContext';
import { RootState } from '../../../../redux/store';
import { addMessage } from '../../../../redux/slices/messages';

import { Message } from '../Message';

import './style.css';

export const ChatMessages = () => {
  const dispatch = useDispatch();
  const { ws, isConnected } = useContext(SocketContext);
  const messages = useSelector(
    (state: RootState) => state.messages.currentMessages
  );

  const messagesList = useMemo(() => [...messages].reverse(), [messages]);

  const unsubscribeWS = useCallback(() => {
    ws.current?.off('message');
  }, [ws]);

  useEffect(() => {
    ws.current?.on('message', (text) => {
      dispatch(
        addMessage({
          text,
          author: 'recipient'
        })
      );
    });
    return () => {
      unsubscribeWS();
    };
  }, [ws, isConnected, dispatch, unsubscribeWS]);

  return (
    <div className='messages-container'>
      {messagesList.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};
