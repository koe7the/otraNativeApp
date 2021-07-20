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
import {store, persistor} from './redux';
const Stack = createStackNavigator();
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="subjects" component={Subjects} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
