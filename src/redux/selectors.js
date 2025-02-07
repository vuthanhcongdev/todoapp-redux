import { createSelector } from 'reselect';

export const searchFilterSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;
export const todosRemainingSelector = createSelector(todoListSelector, searchFilterSelector, statusFilterSelector, priorityFilterSelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter(todo => {
            return todo.title.includes(searchText) && 
            (status === 'All' || (status === 'Completed' && todo.completed) || (status === 'Todo' && !todo.completed)) &&
            (priorities.length === 0 || priorities.includes(todo.priority));
        });
    }
);

// export const todoListSelector = (state) => {
//     const searchText = searchFilterSelector(state);
//     const todosRemaining = state.todoList.filter(todo => {
//         return todo.title.includes(searchText);
//     });
//     return todosRemaining;
// }
