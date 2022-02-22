

export class TodoList {

    constructor() {

        this.todos = [];
        
    }

    nuevoTodo ( todo ) {

        this.todos.push(todo);

    }

    eliminarTodo( id ) {

        this.todos=this.todos.filter(todo => todo.id!=id);

    }

    marcarCompletado( id ){

        for(let i=0; i<this.todos.length; i++){

            if (id===this.todos[i].id){

                this.todos[i].completado=!this.todos[i].completado;
                
                break;

            }

        }

    }

    eliminarCompletados(){

    }

}