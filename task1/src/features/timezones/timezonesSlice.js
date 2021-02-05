import { createSlice } from '@reduxjs/toolkit';

export const timezonesSlice = createSlice({
  name: 'timezones',
  initialState: {
    zones: [],
    selected: '',
  },
  reducers: {
    setZones: (state, action) => {
      state.zones = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setZones, setSelected } = timezonesSlice.actions;

export const selectZones = (state) => state.timezones.zones;
export const selectSelected = (state) => state.timezones.selected;

export default timezonesSlice.reducer;
