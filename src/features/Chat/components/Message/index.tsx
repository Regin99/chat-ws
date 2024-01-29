import { MessageType } from '../../../../redux/slices/messages';

import './style.css';

export const Message = ({ message }: { message: MessageType }) => (
  <div
    style={{
      justifyContent: message.author === 'sender' ? 'flex-end' : 'flex-start'
    }}
    className='message-container'
  >
    <div
      className='message-wrapper'
      style={{
        backgroundColor: message.author === 'sender' ? '#766AC8' : '#212121',
        borderEndStartRadius: message.author === 'sender' ? '20px' : '0',
        borderBottomRightRadius: message.author === 'sender' ? '0' : '20px'
      }}
    >
      <p className='message-text'>{message.text}</p>
    </div>
  </div>
);
