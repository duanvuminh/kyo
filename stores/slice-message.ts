import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MessageState {
  words?: string;
  content?: string;
}

const initialState: MessageState = {};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: (create) => ({
    updateEditMessage: create.reducer(
      (state, action: PayloadAction<MessageState>) => {
        state.words = action.payload.words;
        state.content = action.payload.content;
      }
    ),
  }),
  selectors: {
    selectWord: (message) => message.words,
    selectContent: (message) => message.content,
  },
});

export const { updateEditMessage } = messageSlice.actions;

export const { selectWord, selectContent } = messageSlice.selectors;
