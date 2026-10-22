import { mockCartItems } from '../data/mockCartItems'
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: mockCartItems,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existing = state.items.find((item) => item.id === newItem.id)

      if (existing) {
        existing.quantity = Math.min(
          existing.quantity + newItem.quantity,
          existing.stock
        )
      } else {
        state.items.push(newItem)
      }
    },
    incrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity < item.stock) {
        item.quantity += 1
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addItem, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions

export const selectItems = (state) => state.cart.items
export const selectSubtotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

export default cartSlice.reducer
