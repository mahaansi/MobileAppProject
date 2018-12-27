import * as React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

import { Card, List } from 'react-native-paper';
import { Constants } from 'expo';

export default class ShowBookScreen extends React.Component {
  state = {
    open: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Book Details Page</Text>
        
        <Card style = {{padding:15}}>
          
          <Text>Book Title  :          </Text>
          <Text>Description :          </Text>
          <Text>Book Number :          </Text>
        </Card>

        <Card>
          <Button
            title="Edit Details"
            onPress={() => this.props.navigation.navigate('EditBook')}
          />
        
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
