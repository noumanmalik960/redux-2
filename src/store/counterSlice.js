import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 10
  },
  reducers: {
    // these are actions
    increment: (state) => {
      state.count++
    },

    decrement: (state) => {
      state.count--
    },

    incrementByValue: (state, action) => {
      state.count += action.payload
    },

    reset: (state) => {
      state.count = 0
    }
  }
})



export const { increment, decrement, incrementByValue, reset } = counterSlice.actions;
export default counterSlice.reducer;