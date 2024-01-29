import { ChatHeader, ChatInput, ChatMessages } from './components';
import bg from '../../assets/pattern.png';

import './style.css';
export const Chat = () => (
  <div
    className='page-container'
    style={{
      backgroundImage: `url(${bg})`
    }}
  >
    <ChatHeader />
    <ChatMessages />
    <ChatInput />
  </div>
);
