import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Modal, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Movie } from '../models/movieType';
import { deleteMovie } from '../redux/actions/movieActions';
import styles from '../css/MyListCSS';
import MovieModal from './InfoModal';

const fallbackUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60eAZ44Q3dBj9M7XYy20d4QXIse1iHIt79KawEtR_BBV_1mb7c1xJuK4Aybal4a68HBI&usqp=CAU';

const MyListScreen = ({ navigation }: { navigation: any }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const myMoviesList = useSelector((state: RootState) => state.movies.myMoviesList);

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedMovie(null);
  };

  const removeMovieFromList = (movieId: string) => {
    dispatch(deleteMovie(movieId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Movies List</Text>
      <FlatList
        data={myMoviesList}
        keyExtractor={(item: Movie) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image
              source={{ uri: item.primaryImage?.url }}
              style={styles.moviePoster}
            />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle} numberOfLines={2} ellipsizeMode="tail">
                {item.titleText.text}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => openModal(item)} style={styles.infoButton}>
                <Icon name="info-circle" style={styles.buttonIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeMovieFromList(item.id)}>
                <Icon name="trash" style={styles.deleteButton} />
              </TouchableOpacity>
            </View>
          </View>
        )}
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

export default MyListScreen;
