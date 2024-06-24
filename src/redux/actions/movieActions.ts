import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../models/movieType';

interface MovieState {
    myMoviesList: Movie[];
}

const initialState: MovieState = {
    myMoviesList: [],
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Movie>) => {
            const existingMovie = state.myMoviesList.find(movie => movie.id === action.payload.id);
            if (!existingMovie) {
                state.myMoviesList.push(action.payload);
            }
        },
        deleteMovie: (state, action: PayloadAction<string>) => {
            state.myMoviesList = state.myMoviesList.filter(movie => movie.id !== action.payload);
        },
    },
});

export const { addMovie, deleteMovie } = movieSlice.actions;

export default movieSlice.reducer;
