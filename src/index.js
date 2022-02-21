
import { Todo } from './classes/todo.class'
import { TodoList } from './classes/todo-list.class';
import './styles.css';
import { crearTodoHtml } from './js/componentes';

export const todoList=new TodoList();

const tarea=new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);

tarea.completado=true;

crearTodoHtml(tarea);