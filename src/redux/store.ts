import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './actions/movieActions';

const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
