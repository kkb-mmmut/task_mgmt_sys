import { createReducer,on } from "@ngrx/store";
import {TodosState} from "./todos.state";
import { Map } from "mapbox-gl"; 
import {loadtodos,loadtodossuccess,loadtodosfail,addtodos,addtodossuccess,updatetodos,updatetodossuccess,deletetodos,completetodos,deletetodossuccess} from "./todos.actions";
import { TodosModal,Todos} from "./todos.modal";
const _todosReducer = createReducer(TodosState,
    on(loadtodos, (state) => {
        const loaddata=localStorage.getItem('todoslist');
        console.log(loaddata);
        return {
            ...state,
            todoslist:loaddata?JSON.parse(loaddata):[],
           // IsLoaded:false
        };
    }),
    on(loadtodossuccess,(state,action)=>{
        return{
            ...state,
            todoslist:[...action.todoslist],
            Errormessage:''
            //IsLoaded:false
        }
    }),
    on(loadtodosfail,(state,action)=>{
        console.log(action.Errortext)
        return{
            ...state,
            todoslist:[],
            Errormessage:action.Errortext.message
           // IsLoaded:false
        }
    }),
    on(addtodos,(state,action)=>{
        const _todos={...action.todosinput}; 
        _todos.id=state.todoslist.length+1;
        localStorage.setItem('todoslist',JSON.stringify(state.todoslist));
        return{
            ...state,
            todoslist:[...state.todoslist,_todos]
        }
    }),
    on(addtodossuccess,(state,action)=>{
        const _todos={...action.todosinput};
        return{
            ...state,
            todoslist:[...state.todoslist,_todos]
           // IsLoaded:false
        }
    }),
    on(updatetodos,(state,action)=>{
        const _todos={...action.todosinput};
        const updatedblog=state.todoslist.map(todos=>{
          return _todos.id===todos.id?_todos:todos;
        });
        return{
            ...state,
            todoslist:updatedblog
           // IsLoaded:false
        }
    }),


    on(completetodos,(state,action)=>{ // this is for the checkbox
        const updatedtodos=state.todoslist.filter((data:TodosModal)=>{
            return data.id==action.id
         });     
        updatedtodos[0].isCompleted=!updatedtodos[0].isCompleted; 
        console.log(updatedtodos);
        return{
            ...state,
            todoslist:[...state.todoslist,...updatedtodos],
           IsLoaded:false
        }
    }),


    on(updatetodossuccess,(state,action)=>{
        const _todos={...action.todosinput};
        const updatedblog=state.todoslist.map(todos=>{
          return _todos.id===todos.id?_todos:todos;
        }); 
        return{
            ...state,
            todoslist:updatedblog
           // IsLoaded:false
        }
    }),
    on(deletetodos,(state,action)=>{
        const updatedtodos=state.todoslist.filter((data:TodosModal)=>{
           return data.id !==action.id
        });
        return{
            ...state,
            todoslist:updatedtodos
           // IsLoaded:false
        }
    })

)

export function todosReducer(state: any, action: any) {
    return _todosReducer(state, action);

}