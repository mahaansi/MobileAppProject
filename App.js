import * as React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignUpScreen from './Screens/SignUp';
import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';
import ShowBookScreen from './Screens/ShowBook';
import AddBookScreen from './Screens/AddBook';
import EditBookScreen from './Screens/EditBook';

const AppNavigator = createStackNavigator({
  SignUp: {
    screen: SignUpScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Login : {
    screen : LoginScreen
  },
  ShowBook : {
    screen : ShowBookScreen
  },
  AddBook : {
    screen : AddBookScreen
  },
  EditBook : {
    screen : EditBookScreen
  }
},
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}