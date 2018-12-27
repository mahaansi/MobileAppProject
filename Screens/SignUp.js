import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

import { Card, TextInput, Snackbar } from 'react-native-paper';
import { Constants } from 'expo';

import firebase from '../firebaseApp';

export default class SignUpScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      SnackbarVisible: false,
    };
  }

  CreateUser = () => {
    let self = this;
    firebase
      .auth()
      .createUserWithEmailAndPassword(self.state.email, self.state.password)
      .then((user) => {
        self.props.navigation.navigate('Home');
        self.setState({
          SnackbarVisible:true
        })
      })
      .catch(err => err);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Sign Up Page</Text>
        <Card>
          <View>
            <TextInput
              style={styles.loginInput}
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
          </View>
          <Button title="Sign Up" onPress={this.CreateUser} />
        </Card>
        <Snackbar
          visible={this.state.SnackbarVisible}
          onDismiss={() => this.setState({ SnackbarVisible: false })}
        >
          Registered.
        </Snackbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
