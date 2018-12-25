import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

import { Card, List } from 'react-native-paper';
import { Constants } from 'expo';

export default class EditBookScreen extends React.Component {
  state = {
    open: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Edit Book Details Page</Text>
        <Card>

        
        </Card>
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
