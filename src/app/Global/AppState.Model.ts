// Autor: Kamlesh Kumar Bind 
import { Todos } from "../shared/store/todos.modal";
import { TaskComponent } from "../task/task.component";

export interface AppStateModel{ 
    todos:Todos[],
    IsLoaded:boolean,

}