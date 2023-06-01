import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    value:[
    {id: 1, title: "Task1" ,description: "Faire les courses", done:false},
    {id: 2, title: "Task2" ,description: "Faire du sport", done:false},
    {id: 3, title: "Task3" ,description: "Préparer le repas", done:false},]
};

export const listsSlice = createSlice({
    name:'lists',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const newTodo = {title:action.payload.title, description: action.payload.description}
            state.value = [...state.value,newTodo]
        },

       check:(state,action) => {
        const newList = [...state.value]
        newList[action.payload.index].done = action.payload.value
        state.value = newList
       }
    },
});

export const {check, addTodo} = listsSlice.actions;
export default listsSlice.reducer;
