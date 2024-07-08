import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../css/SearchScreenCSS';
import MovieModal from './InfoModal'; 

const apikey = 'e270600a55msh3165999218252c2p1390cajsnb0322d294db2';

const SearchScreen = ({ navigation }: { navigation: any }) => {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [showAllGenres, setShowAllGenres] = useState<boolean>(false);
  const [movies, setMovies] = useState<any[]>([]);
  const [flatListKey, setFlatListKey] = useState<string>('initialKey');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalFetchedMovies, setTotalFetchedMovies] = useState<number>(0);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const fallbackUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60eAZ44Q3dBj9M7XYy20d4QXIse1iHIt79KawEtR_BBV_1mb7c1xJuK4Aybal4a68HBI&usqp=CAU';

  useEffect(() => {
    const fetchGenres = async () => {
      const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres',
        params: { info: 'base_info' },
        headers: {
          'x-rapidapi-key': apikey,
          'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const filteredGenres = response.data.results.filter((genre: string) => genre !== null);
        setGenres(filteredGenres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const fetchMoviesByGenre = async (genre: string, page: number = 1) => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles',
      params: { genre, limit: '28', page: page.toString(), info: 'base_info', year : 2023 },
      headers: {
        'x-rapidapi-key': apikey,
        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const fetchedMovies = response.data.results;
      setTotalFetchedMovies(fetchedMovies.length);
      if (page === 1) {
        setMovies(fetchedMovies);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
      }
      setFlatListKey(genre);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    setLoading(false);
    setSelectedGenre(genre);
    setShowAllGenres(false);
  };

  const loadMoreMovies = () => {
    const nextPage = currentPage + 1;
    fetchMoviesByGenre(selectedGenre, nextPage);
    setCurrentPage(nextPage);
  };

  const toggleShowAllGenres = () => {
    setShowAllGenres(!showAllGenres);
  };

  const searchMovies = async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    const options = {
      method: 'GET',
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${query}`,
      params: { exact: 'false', info: 'base_info' },
      headers: {
        'x-rapidapi-key': apikey,
        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setMovies(response.data.results);
      setFlatListKey('searchResults');
    } catch (error) {
      console.error('Error searching movies:', error);
    }
    setLoading(false);
    setSelectedGenre('');
    setShowAllGenres(false);
  };

  const openModal = (movie: any) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedMovie(null);
  };

  const renderHeader = () => (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search by title"
          placeholderTextColor="#888"
          style={styles.searchBar}
          onSubmitEditing={({ nativeEvent }) => {
            searchMovies(nativeEvent.text);
          }}
          keyboardType="default"
          autoFocus={false}
        />
      </View>
      <View style={styles.genreContainer}>
        <Text style={styles.genreTitle}>Genres</Text>
        <View style={styles.genreGrid}>
          {(showAllGenres ? genres : genres.slice(0, 6)).map((genre) => (
            <TouchableOpacity key={genre} style={styles.genreButton} onPress={() => {
              setCurrentPage(1);
              fetchMoviesByGenre(genre);
            }}>
              <Text style={styles.genreButtonText}>{genre}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {genres.length > 6 && (
          <TouchableOpacity style={styles.moreButton} onPress={toggleShowAllGenres}>
            <Text style={styles.moreButtonText}>
              {showAllGenres ? 'Show Less' : 'More Genres'}
            </Text>
            <Icon style={styles.moreButton} name={showAllGenres ? 'angle-up' : 'angle-down'} size={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
      {selectedGenre && (
        <Text style={styles.moviesTitle}>{selectedGenre} movies</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={flatListKey}
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.movieItem} onPress={() => openModal(item)}>
            <Image
              source={{ uri: item.primaryImage?.url || fallbackUri }}
              style={styles.movieImage}
            />
            <Text style={styles.movieTitle}>{item.titleText.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            totalFetchedMovies === 28 && (
              <TouchableOpacity onPress={loadMoreMovies} style={styles.loadMoreButton}>
                <Text style={styles.loadMoreButtonText}>Load More</Text>
              </TouchableOpacity>
            )
          ) || null
        }
      />
      <MovieModal
        navigation={navigation}
        isVisible={isModalVisible}
        movie={selectedMovie}
        onClose={closeModal}
      />
    </View>
  );
};

export default SearchScreen;
