import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MyListScreen from './screens/MyListScreen';
import SearchScreen from './screens/SearchScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import VideoScreen from './screens/VideoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white',
            headerTitle: '', 
          }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyList" component={MyListScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;



