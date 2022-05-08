import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IInitialStateInt = {
  token: null,
  isTokenLoaded: false,
};

interface IInitialStateInt {
  token: string | null;
  isTokenLoaded: boolean;
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setTokenLoaded: (state, action: PayloadAction<boolean>) => {
      state.isTokenLoaded = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setToken, setTokenLoaded } = appSlice.actions;
