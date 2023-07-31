import { createFeatureSelector, createSelector } from "@ngrx/store"; 
import { TodosModal,Todos } from "./todos.modal";

const gettodosstate=createFeatureSelector<Todos>('todos');

export const gettodos=createSelector(gettodosstate,(state)=>{
    return state.todoslist
});

export const gettodosbyid=(todosid:number)=>createSelector(gettodosstate,(state)=>{
    return state.todoslist.find((todos:TodosModal)=>todos.id===todosid) as TodosModal;
})

export const gettodosinfo=createSelector(gettodosstate,(state)=>{
    return state
});

// export const getspinnerstate=createSelector(getblogstate,(state)=>{
//     return state.IsLoaded;
// });