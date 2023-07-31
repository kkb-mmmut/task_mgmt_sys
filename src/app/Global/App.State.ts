import { todosReducer } from "../shared/store/todos.reducer";
import { AppReducer } from "./App.Reducer";

export const AppState={ 
    todos:todosReducer,
    app:AppReducer
}