import { ArrowLeftIcon } from '../../../../components/svg';

import './style.css';

export const ChatHeader = () => (
  <header className='header-container'>
    <ArrowLeftIcon />
    <p className='header-title'>Chat</p>
    <ArrowLeftIcon opacity={0} />
  </header>
);
