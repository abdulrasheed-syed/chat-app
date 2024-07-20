import { createAction } from '@reduxjs/toolkit';

export const addTitle = createAction<string>('ADD_TITLE');
export const generateData = createAction<string>('GENERATE_DATA');
