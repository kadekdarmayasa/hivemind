import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface DropdownState {
  status: 'open' | 'close',
}

const initialState: DropdownState = {
  status: 'close',
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<'open' | 'close'>) => {
      state.status = action.payload;
    }
  }
})

export const { toggle } = dropdownSlice.actions;
export const selectedStatus = (state: RootState) => state.dropdown.status;
export default dropdownSlice.reducer;