const rootReducer = (state, action) => {
    return {
        todoList: todoListReducer(state.todoList, action),
        filters: filtersReducer(state.filters, action),
    }
}

export default rootReducer;