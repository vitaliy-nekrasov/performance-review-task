import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../models/models"

interface ShopState {
  favourites: IProduct[];
}

const initialState: ShopState = {
  favourites: JSON.parse(localStorage.getItem("favourites") ?? "[]"),
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
      addToFavourite(state, action: PayloadAction<IProduct>) {
          state.favourites.push(action.payload);
          localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
      removeFromFavourite(state, action: PayloadAction<IProduct>) {
          state.favourites = state.favourites.filter(f => f.id !== action.payload.id);
          localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const shopActions = shopSlice.actions;
export const shopReducer = shopSlice.reducer;