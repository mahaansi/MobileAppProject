import * as React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import firebase from './firebaseApp';

import SignUpScreen from './Screens/SignUp';
import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';
import ShowBookScreen from './Screens/ShowBook';
import AddBookScreen from './Screens/AddBook';
import EditBookScreen from './Screens/EditBook';

const AppNavigator = createStackNavigator(
  {
    SignUp: {
      screen: SignUpScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    ShowBook: {
      screen: ShowBookScreen,
    },
    AddBook: {
      screen: AddBookScreen,
    },
    EditBook: {
      screen: EditBookScreen,
    },
  },
  {
    initialRouteName: firebase.auth().currentUser ? 'Home' : 'Login',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount() {
    let self = this;
    firebase.auth().onAuthStateChanged(user => {
      // alert(user.email)
      if(user){
        this.AppNavigator.initialRouteName('Home');
        self.props.navigation.navigate('Home');
        
      }
      // self.props.navigation.navigate(user ? 'Home' : 'Login');
    });
  }

  render() {
    return <AppContainer />;
  }
}
