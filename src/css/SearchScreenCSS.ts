import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchBarContainer: {
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#333',
    color: '#fff',
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    flex: 1,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#555',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  genreContainer: {
    marginTop: 20,
  },
  genreTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  genreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  genreButton: {
    backgroundColor: '#444',
    padding: 15,
    width: '45%',
    marginVertical: 10,
    borderRadius: 10,
  },
  genreButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  moreButton: {
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  moviesContainer: {
    marginTop: 20,
  },
  moviesTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  movieItem: {
    margin: 10,
    alignItems: 'center',
    width: '45%',
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loadMoreButton: {
    padding: 15,
    backgroundColor: '#444',
    margin: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  loadMoreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  featuredContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  featuredItem: {
    marginTop: 10,
  },
  featuredItemText: {
    color: '#aaa',
    fontSize: 16,
  },
});

export default styles;