import { createAction, props } from "@ngrx/store"; 
import { TodosModal } from "./todos.modal";

export const LOAD_TODOS_SUCCESS='[todos page] load todos success';
export const LOAD_TODOS_FAIL='[todos page] load todos fail';
export const LOAD_TODOS='[todos page] load todos';
export const ADD_TODOS_SUCCESS='[todos page] add todos success';
export const ADD_TODOS='[todos page] add todos';
export const UPDATE_TODOS='[todos page] update todos';
export const UPDATE_TODOS_SUCCESS='[todos page] update todos success';
export const DELETE_TODOS='[todos page] delete todos';
export const DELETE_TODOS_SUCCESS='[todos page] delete todos success';
export const COMPLETE_TODOS='[todos page] complete todos';
 
export const loadtodos=createAction(LOAD_TODOS);

export const loadtodossuccess=createAction(LOAD_TODOS_SUCCESS,props<{todoslist:TodosModal[]}>())

export const loadtodosfail=createAction(LOAD_TODOS_FAIL,props<{Errortext:any}>())

export const addtodos=createAction(ADD_TODOS,props<{todosinput:TodosModal}>()); // props is used to pass the data to the reducer

export const addtodossuccess=createAction(ADD_TODOS_SUCCESS,props<{todosinput:TodosModal}>());

export const updatetodos=createAction(UPDATE_TODOS,props<{todosinput:TodosModal}>());

export const updatetodossuccess=createAction(UPDATE_TODOS_SUCCESS,props<{todosinput:TodosModal}>());

export const deletetodos=createAction(DELETE_TODOS,props<{id:number}>());

export const completetodos=createAction(COMPLETE_TODOS,props<{id:number}>());

export const deletetodossuccess=createAction(DELETE_TODOS_SUCCESS,props<{id:number}>());