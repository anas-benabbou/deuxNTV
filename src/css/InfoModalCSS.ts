import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

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
    removeFromMyListButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeFromMyListButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoPlayer: {
        width: '100%',
        height: 200,
        marginTop: 10,
    },
    videoContainer: {
        marginTop: 20,
    },
    closeVideoButton: {
        backgroundColor: '#E50914',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    closeVideoButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default styles;