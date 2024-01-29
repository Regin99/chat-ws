import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SocketContext } from '../../../../contexts/SocketContext';
import { addMessage } from '../../../../redux/slices/messages';
import { SendIcon } from '../../../../components/svg';

import './style.css';

export const ChatInput = () => {
  const dispatch = useDispatch();
  const { ws } = useContext(SocketContext);
  const [input, setInput] = useState('');

  const handleSend = () => {
    ws.current?.emit('message', input);
    dispatch(
      addMessage({
        text: input,
        author: 'sender'
      })
    );
    setInput('');
  };

  return (
    <div className='input-container'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='input'
        placeholder='Enter your message'
      />
      <button className='button' disabled={!input} onClick={handleSend}>
        <SendIcon />
      </button>
    </div>
  );
};
