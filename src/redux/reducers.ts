import { createReducer } from '@reduxjs/toolkit';
import { addTitle, generateData } from './actions';

interface State {
  titles: string[];
  generatedData: string;
}

const initialState: State = {
  titles: [],
  generatedData: '',
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTitle, (state, action) => {
      state.titles.push(action.payload);
    })
    .addCase(generateData, (state, action) => {
      state.generatedData = action.payload;
    });
});

export default rootReducer;
