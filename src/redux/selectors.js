import { createSelector } from 'reselect';

export const searchFilterSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const todosRemainingSelector = createSelector(todoListSelector, searchFilterSelector, 
    (todoList, searchText) => {
        return todoList.filter(todo => {
            return todo.title.includes(searchText);
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
