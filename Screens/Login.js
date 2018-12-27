import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

import { Card, TextInput } from 'react-native-paper';
import { Constants } from 'expo';
import firebase from '../firebaseApp'

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    if(firebase.auth().currentUser){
        this.props.navigation.navigate('Home');
    }

    this.state = {
      email: '',
      password: '',
    };
  }
  LogIn = () => {
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password).then(
        user => {
          this.props.navigation.navigate('Home');
        }
      ).catch(function(error) {
        alert(error.message);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>BookShare</Text>
        <Text style={styles.paragraph} >Login</Text>

        <Card style={{ padding: 10 }}>
          <TextInput
            style= { styles.loginInput }
            label="Email"
            mode="outlined"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            label="Password"
            mode="outlined"
            value={this.state.password}
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />

          <Button
            title="Login"
            onPress={ this.LogIn }
          />
        </Card>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginInput:{
    marginBottom:10
  }
});
