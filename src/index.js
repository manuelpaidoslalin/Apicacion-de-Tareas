
import { Todo } from './classes/todo.class'
import { TodoList } from './classes/todo-list.class';
import './styles.css';
import { crearTodoHtml } from './js/componentes';

export const todoList=new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
