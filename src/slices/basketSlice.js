import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {

		addToBasket: (state, action) => {
			state.items = [...state.items, action.payload]
		},

		removeFromBasket: (state, action) => {
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);
			let newBasket = [...state.items];
			console.log(action.payload)
			if (index >= 0){
				// the item exists in item and remove it
				newBasket.splice(index, 1)
			}else{
				console.warn(
					`Cant remove product (id : ${action.payload.id}) as it is not in basket`
				)
			}
			state.items = newBasket;
		},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
