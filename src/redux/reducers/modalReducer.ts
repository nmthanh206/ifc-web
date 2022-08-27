import { createSlice } from '@reduxjs/toolkit';

const initialState: { value: boolean } = {
  value: false,
};

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
const modalActions = modalReducer.actions;
export { modalActions };

export default modalReducer.reducer;
