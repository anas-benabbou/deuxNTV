import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../css/VideoScreenCSS";

const vidURL = require('../assets/video.mp4'); // Update this to your local video file path

const VideoScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Video
        source={vidURL}
        style={styles.videoPlayer}
        controls={true}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="times" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default VideoScreen;
