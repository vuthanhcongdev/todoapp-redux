// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {
//         id: 4,
//         title: 'Learn .NET',
//         priority: 'Medium',
//         completed: false,
//     }
// }

// action creators => function
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
