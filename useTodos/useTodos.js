import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos') || [] )
}


export const useTodos = () => {

    const [ todos, dispatch]  = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = ( newTodo ) => {
        
        //Creo la accion que voy a enviar
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo,
        }
        
        //Envio la action al useReducer
        dispatch(action);
        
    }

    const handleDeleteTodo = (id) => {
        //Creo la accion que voy a enviar y la envio
        dispatch ({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        //Creo la accion que voy a enviar y la envio
        dispatch ({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    /* const todosCount = () => {
        return todos.length;
    }

    const pendingTodosCount = () => {
        return todos.filter(todo => !todo.done).length;
    } */

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,

    }
  
}
