import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name : 'location',
  initialState : '',
  reducers : {
    changeLocation (state, action){
      return action.payload
    }
  }
})

export let { changeLocation } = locationSlice.actions 
export default locationSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   location: ''
// };

// const locationSlice = createSlice({
//   name: 'location',
//   initialState,
//   reducers: {
//     changeLocation: (state, action) => {
//       state.location = action.payload;
//     }
//   }
// });

// export const { changeLocation } = locationSlice.actions;
// export default locationSlice.reducer;