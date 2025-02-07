import { combineReducers } from 'redux';

import todoListReducer from '../components/TodoList/TodoSlice';
import filtersReducer from '../components/Filters/FilterSlice';

// const rootReducer = (state = {}, action) => {
//     return {
//         todoList: todoListReducer(state.todoList, action),
//         filters: filtersReducer(state.filters, action),
//     }
// }

const rootReducer = combineReducers({
    todoList: todoListReducer,
    filters: filtersReducer,
})

export default rootReducer;