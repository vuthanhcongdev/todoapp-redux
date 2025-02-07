const initState = [
    {
        id: 1,
        title: 'Learn React',
        priority: 'Medium',
        completed: false,
    },
    {
        id: 2,
        title: 'Learn Redux',
        priority: 'High',
        completed: true,
    },
    {
        id: 3,
        title: 'Learn Ant Design',
        priority: 'Low',
        completed: false,
    },
]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo': {
            return [...state, action.payload]
        }
        case 'todoList/toggleTodoStatus': {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });
        }
        default:
            return state;
    }
}

export default todoListReducer;