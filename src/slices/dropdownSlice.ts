import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface DropdownState {
  state: 'open' | 'close',
}

const initialState: DropdownState = {
  state: 'close',
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<'open' | 'close'>) => {
      state.state = action.payload;
    }
  }
})

export const { toggle } = dropdownSlice.actions;
export const selectedState = (state: RootState) => state.dropdown.state;
export default dropdownSlice.reducer;