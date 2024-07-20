import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: {
    data: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
