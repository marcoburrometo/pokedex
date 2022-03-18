import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: [],
};

export const carrelloSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.pokemon = [...state.pokemon, action.payload];
    },
  },
});

export const { addPokemon } = carrelloSlice.actions;

export default carrelloSlice.reducer;
