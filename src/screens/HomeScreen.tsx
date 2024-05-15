import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyList')}>
                    <Icon name="list" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Icon name="user" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background for better visibility
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
});

export default HomeScreen;
