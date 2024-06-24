import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  moviePoster: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
  movieDetails: {
    flex: 1,
    marginLeft: 10,
  },
  movieTitle: {
    color: 'white',
    fontSize: 16,
  },
  infoButton: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonIcon: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default styles;
