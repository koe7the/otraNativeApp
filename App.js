import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  View,
  Button,
  FlatList,
  Modal,
} from 'react-native';
import Home from './screens/Home';
import Subjects from './screens/Subjects';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import subjectsReducer from './redux/reducer';

const Stack = createStackNavigator();
const store = createStore(subjectsReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="subjects" component={Subjects} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
