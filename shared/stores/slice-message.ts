import { BaseItem, Source } from "@/shared/types/models/word";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BaseItem = {
  documentId: "",
  words: "",
  source: Source.FIREBASE,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: (create) => ({
    updateEditMessage: create.reducer(
      (state, action: PayloadAction<BaseItem>) => {
        state.words = action.payload.words;
        state.content = action.payload.content;
        state.source = action.payload.source;
        state.collection = action.payload.collection;
        state.documentId = action.payload.documentId;
      }
    ),
  }),
  selectors: {
    selectMessage: (message) => message,
  },
});

export const { updateEditMessage } = messageSlice.actions;

export const { selectMessage } = messageSlice.selectors;
