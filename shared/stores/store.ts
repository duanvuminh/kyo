import { counterSlice } from "@/shared/stores/slice-counter";
import { messageSlice } from "@/shared/stores/slice-message";
import { quotesApiSlice } from "@/shared/stores/slice-quotes";
import { combineSlices, configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";

const rootReducer = combineSlices(counterSlice, messageSlice, quotesApiSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
