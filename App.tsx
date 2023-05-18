/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import UseStates from './src/screens/UseStates';
import UseEffect from './src/screens/UseEffect';
import Practise from './src/screens/Practise';
import TodoApp from './src/screens/TodoApp';
import Users from './src/screens/UserApp/Users';
import SearchUser from './src/components/SearchUser';
import UsersList from './src/components/UsersList';
import Post from './src/screens/PostApiWork/Post';
import LimitCard from './src/components/LimitCard';
import HooksApp from './src/screens/HooksPracticeApp/HooksApp';
import FormCard from './src/components/FormCard';
import Input from './src/components/Input';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetails from './src/screens/HooksPracticeApp/UserDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HooksApp" component={HooksApp} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
