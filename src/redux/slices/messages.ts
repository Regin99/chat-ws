import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type MessageType = {
  text: string;
  author: 'recipient' | 'sender';
};

export interface MessagesState {
  currentMessages: MessageType[];
}

const initialState: MessagesState = {
  currentMessages: []
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<MessageType>) => {
      state.currentMessages.push(action.payload);
    }
  }
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
