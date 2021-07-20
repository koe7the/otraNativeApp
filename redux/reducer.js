import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';

const INITIAL_STATE = {
  users: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {users: [...state.users, action.payload]};

    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['users'],
};

export default combineReducers({
  users: persistReducer(persistConfig, usersReducer),
});
