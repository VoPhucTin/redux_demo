import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../share/ListOfUser";
export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      // Write code for addUser function
    state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      // Write code for deleteUser fuction
    state.value = state.value.filter((user)=> user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      // Write code for updateUsername function
    state.value.map((user)=>{if(user.id === action.payload.id){
        user.username = action.payload.username;}
     });
    },
  },
});
export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
