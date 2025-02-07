// redux core
// import rootReducer from "./reducer";
// import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

// redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '../components/TodoList/TodoSlice';
import { filtersSlice } from '../components/Filters/FilterSlice';

const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer,
        filters: filtersSlice.reducer,
    },
});

export default store;