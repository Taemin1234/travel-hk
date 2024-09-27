import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name : 'location',
  initialState : '',
  reducers : {
    changeLoca (state, action){
      return action.payload
    }
  }
})

export let { changeLoca } = locationSlice.actions 
export default locationSlice.reducer;