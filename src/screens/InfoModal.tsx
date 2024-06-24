import React from "react";
import { View, Text, Image, Modal, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../css/InfoModalCSS";
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, deleteMovie } from '../redux/actions/movieActions';
import { RootState } from '../redux/store';
import { Movie } from "../models/movieType";

const fallbackUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60eAZ44Q3dBj9M7XYy20d4QXIse1iHIt79KawEtR_BBV_1mb7c1xJuK4Aybal4a68HBI&usqp=CAU';

const InfoModal = ({ isVisible, movie, onClose }: { isVisible: boolean, movie: any, onClose: () => void }) => {
  const dispatch = useDispatch();
  const myMoviesList = useSelector((state: RootState) => state.movies.myMoviesList);
  const isMovieInList = movie ? myMoviesList.some((m: Movie) => m.id === movie.id) : false;

  const addMovieToMyList = (movie: Movie) => {
    dispatch(addMovie(movie));
  };

  const removeMovieFromMyList = (movie: Movie) => {
    dispatch(deleteMovie(movie.id));
  };

  if (!movie) return null;

  // Calculate modal dimensions based on device width and height
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const modalWidth = screenWidth * 0.8; // 80% of screen width
  const modalHeight = screenHeight * 0.8; // 80% of screen height

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, { width: modalWidth, height: modalHeight }]}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image
              source={{ uri: movie.primaryImage?.url || fallbackUri }}
              style={styles.modalPoster}
            />
            <Text style={styles.modalTitle}>{movie.titleText.text}</Text>
            <TouchableOpacity style={styles.playButton2}>
              <Icon name="play" size={16} color="black" />
              <Text style={styles.playButtonText2}>Play</Text>
            </TouchableOpacity>
            {isMovieInList ? (
              <TouchableOpacity style={styles.removeFromMyListButton} onPress={() => removeMovieFromMyList(movie)}>
                <Icon name="minus" size={16} color="white" />
                <Text style={styles.removeFromMyListButtonText}>Remove from My List</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.addToMyListButton} onPress={() => addMovieToMyList(movie)}>
                <Icon name="plus" size={16} color="white" />
                <Text style={styles.addToMyListButtonText}>Add to My List</Text>
              </TouchableOpacity>
            )}
            {movie.ratingsSummary && movie.ratingsSummary.aggregateRating ? (
              <Text style={styles.modalRating}>Rating: {movie.ratingsSummary.aggregateRating}</Text>
            ) : null}
            {movie.runtime && movie.runtime.seconds ? (
              <Text style={styles.modalRating}>Runtime: {Math.floor(movie.runtime.seconds / 60)} mins</Text>
            ) : null}
            {movie.plot && movie.plot.plotText && movie.plot.plotText.plainText ? (
              <Text style={styles.modalPlot}>{movie.plot.plotText.plainText}</Text>
            ) : null}
            {movie.genres && movie.genres.genres ? (
              <Text style={styles.modalGenres}>Genres: {movie.genres.genres.map((genre: { text: any; }) => genre.text).join(' • ')}</Text>
            ) : null}
            {movie.releaseDate && movie.releaseDate.day && movie.releaseDate.month && movie.releaseDate.year ? (
              <Text style={styles.modalReleaseDate}>
                Release Date: {movie.releaseDate.day}/{movie.releaseDate.month}/{movie.releaseDate.year}
              </Text>
            ) : null}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
