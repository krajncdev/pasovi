import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISearchState {
  query: string;
}

const initialState: ISearchState = {
  query: '',
};

export const searchSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { change } = searchSlice.actions;

export default searchSlice.reducer;
