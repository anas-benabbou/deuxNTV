import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';
import { RootState } from '../redux/store';
import { Movie } from '../models/movieType';
import styles from '../css/HomeScreenCSS';
import MovieModal from './InfoModal';


const apikey = 'e270600a55msh3165999218252c2p1390cajsnb0322d294db2';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const [mainMovie, setMainMovie] = useState<Movie | null>(null);
    const [topRatedSeries, setTopRatedSeries] = useState<Movie[]>([]);
    const [topBoxOffice, setTopBoxOffice] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [popularSeries, setPopularSeries] = useState<Movie[]>([]);
    const fallbackUri = require('../assets/wjeaTrab.jpg');
    const dispatch = useDispatch();
    const myMoviesList = useSelector((state: RootState) => state.movies.myMoviesList);


    useEffect(() => {
        // Function to fetch a single random movie from the API
        const fetchSingleMovie = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
                    params: { limit: '1', list: 'top_rated_series_250', info: 'base_info' },
                    headers: {
                        'x-rapidapi-key': apikey,
                        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
                        'Content-Type': 'application/json',
                    },
                };

                const response = await axios.request(options);
                const fetchedMovie: Movie = response.data.results[0];
                if (fetchedMovie.primaryImage?.url) {
                    try {
                        await axios.get(fetchedMovie.primaryImage.url);
                        setMainMovie({ ...fetchedMovie, validImage: true });
                    } catch {
                        setMainMovie({ ...fetchedMovie, validImage: false });
                    }
                } else {
                    setMainMovie({ ...fetchedMovie, validImage: false });
                }
            } catch (error) {
                console.error('Error fetching single movie:', error);
            }
        };

        // Function to fetch additional movies for the horizontal scroll view
        const fetchTopRated = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
                    params: { limit: '10', list: 'top_rated_series_250', info: 'base_info' },
                    headers: {
                        'x-rapidapi-key': apikey,
                        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
                        'Content-Type': 'application/json',
                    },
                };

                const response = await axios.request(options);
                const fetchedMovies: Movie[] = response.data.results;
                const validatedMovies: Movie[] = await Promise.all(fetchedMovies.map(async (movie: Movie) => {
                    if (movie.primaryImage?.url) {
                        try {
                            await axios.get(movie.primaryImage.url);
                            return { ...movie, validImage: true };
                        } catch {
                            return { ...movie, validImage: false };
                        }
                    }
                    return { ...movie, validImage: false };
                }));

                setTopRatedSeries(validatedMovies);
            } catch (error) {
                console.error('Error fetching additional movies:', error);
            }

        };

        const fetchTopBoxOffice = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
                    params: { list: 'top_boxoffice_200', limit: '10', info: 'base_info' },
                    headers: {
                        'x-rapidapi-key': apikey,
                        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
                        'Content-Type': 'application/json',
                    },
                };

                const response = await axios.request(options);
                const fetchedMovies: Movie[] = response.data.results;
                const validatedMovies: Movie[] = await Promise.all(fetchedMovies.map(async (movie: Movie) => {
                    if (movie.primaryImage?.url) {
                        try {
                            await axios.get(movie.primaryImage.url);
                            return { ...movie, validImage: true };
                        } catch {
                            return { ...movie, validImage: false };
                        }
                    }
                    return { ...movie, validImage: false };
                }));

                setTopBoxOffice(validatedMovies);
            } catch (error) {
                console.error('Error fetching top box office movies:', error);
            }
        };

        const fetchPopularSeries = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
                    params: { limit: '10', list: 'most_pop_series', info: 'base_info' },
                    headers: {
                        'x-rapidapi-key': apikey,
                        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
                        'Content-Type': 'application/json',
                    },
                };

                const response = await axios.request(options);
                const fetchedMovies: Movie[] = response.data.results;
                const validatedMovies: Movie[] = await Promise.all(fetchedMovies.map(async (movie: Movie) => {
                    if (movie.primaryImage?.url) {
                        try {
                            await axios.get(movie.primaryImage.url);
                            return { ...movie, validImage: true };
                        } catch {
                            return { ...movie, validImage: false };
                        }
                    }
                    return { ...movie, validImage: false };
                }));

                setPopularSeries(validatedMovies);
            } catch (error) {
                console.error('Error fetching popular series:', error);
            }
        }

        // Call the fetch functions
        fetchSingleMovie();
        fetchTopRated();
        fetchTopBoxOffice();
        fetchPopularSeries();
    }, []);

    const openModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedMovie(null);
    };

    const addMovieToMyList = (movie: Movie) => {
        dispatch(addMovie(movie));
    };

    return (
        <ScrollView style={styles.container}>
            {mainMovie && (
                <View>
                    <Image
                        source={mainMovie.validImage ? { uri: mainMovie.primaryImage?.url } : fallbackUri}
                        style={styles.mainMoviePoster}
                    />
                    <Text style={styles.mainMovieTitle}>{mainMovie.titleText.text}</Text>
                    <Text style={styles.movieGenres}>{mainMovie.genres.genres.map(genre => genre.text).join(' • ')}</Text>
                    <View style={styles.mainMovieButtons}>
                        <TouchableOpacity style={styles.myListButton} onPress={() => addMovieToMyList(mainMovie)}>
                            <Icon name="plus" size={16} color="white" />
                            <Text style={styles.buttonText}>My List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.playButton} onPress={() => {
                            navigation.navigate('VideoScreen');
                        }}>
                            <Icon name="play" size={16} color="white" />
                            <Text style={styles.buttonText}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity key={mainMovie.id} style={styles.infoButton} onPress={() => openModal(mainMovie)}>
                            <Icon name="info-circle" size={16} color="white" />
                            <Text style={styles.buttonText}>Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            <Text style={styles.sectionTitle}>Top rated series</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {topRatedSeries.map((movie) => (
                    <TouchableOpacity key={movie.id} style={styles.movieContainer} onPress={() => openModal(movie)}>
                        <Image
                            source={movie.validImage ? { uri: movie.primaryImage?.url } : fallbackUri}
                            style={styles.moviePoster}
                        />
                        <Text style={styles.movieTitle}>{movie.titleText.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Box office movies</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {topBoxOffice.map((movie) => (
                    <TouchableOpacity key={movie.id} style={styles.movieContainer} onPress={() => openModal(movie)}>
                        <Image
                            source={movie.validImage ? { uri: movie.primaryImage?.url } : fallbackUri}
                            style={styles.moviePoster}
                        />
                        <Text style={styles.movieTitle}>{movie.titleText.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Popular series</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {popularSeries.map((movie) => (
                    <TouchableOpacity key={movie.id} style={styles.movieContainer} onPress={() => openModal(movie)}>
                        <Image
                            source={movie.validImage ? { uri: movie.primaryImage?.url } : fallbackUri}
                            style={styles.moviePoster}
                        />
                        <Text style={styles.movieTitle}>{movie.titleText.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyList')}>
                    <Icon name="list" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                    <Icon name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <MovieModal
                navigation={navigation}
                isVisible={isModalVisible}
                movie={selectedMovie}
                onClose={closeModal}
            />


        </ScrollView>
    );
}



export default HomeScreen;
