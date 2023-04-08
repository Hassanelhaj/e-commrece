import { createSlice } from "@reduxjs/toolkit";


const add=(arr,el)=>{
     arr.push(el);
     return arr;


}
const CartSlice= createSlice({
    name:'cart',
    initialState:{value:[]},
    reducers:{
        Add:(state,action)=>{
        
            state = state.value.push(action.payload);
            const myList = action.payload;
            console.log(myList);
        
          
        },
        Remove:(state)=>{

        }
    }
});

export const {Add,Remove}=CartSlice.actions;
export default CartSlice.reducer;