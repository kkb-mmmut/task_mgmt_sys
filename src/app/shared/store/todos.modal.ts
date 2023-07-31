export interface TodosModal {
    id: number
    desc: string
    responsible: string
    priority: string
    isCompleted: boolean
  }

  export interface Todos{
    todoslist:TodosModal[],
    Errormessage:string
    //IsLoaded:boolean
 }