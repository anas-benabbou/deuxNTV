import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },
    mainMoviePoster: {
        width: '100%',
        height: 400,
        borderRadius: 10,
    },
    mainMovieTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    movieGenres: {
        color: 'gray',
        fontSize: 16,
        marginTop: 5,
    },
    mainMovieButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    myListButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    playButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E50914',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    infoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        marginLeft: 5,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    horizontalScroll: {
        marginTop: 10,
    },
    movieContainer: {
        marginRight: 10,
    },
    moviePoster: {
        width: 120,
        height: 180,
        borderRadius: 10,
    },
    movieTitle: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
        width: 120,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalPoster: {
        width: 200,
        height: 300,
        borderRadius: 10,
    },
    modalTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    closeButton: {
        backgroundColor: '#E50914',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalRating: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
    modalGenres: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
    modalPlot: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
    modalRuntime: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
    modalReleaseDate: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
    playButton2: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButtonText2: {
        color: 'black',
        fontWeight: 'bold',
    },
    playButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    addToMyListButton: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToMyListButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default styles;