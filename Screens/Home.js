import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

import { Card, List } from 'react-native-paper';
import { Constants } from 'expo';
import firebase from '../firebaseApp';

export default class HomeScreen extends React.Component {
   constructor(props) {
    super(props)

    this.state = {
      books: [],
     
    }
  }

  componentWillMount() {
    firebase.database().ref('/books').on('value', (snapshot) => {
      let books = []

      snapshot.forEach(function(childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();

        childData['key'] = childKey
        books.push(childData)
      });

      this.setState({ books: books })
    })
  }

  _renderBooks() {
    if(! this.state.books.length) {
      return (<Text style={styles.paragraph}>No Book Found!</Text>)
    }
              
              return this.state.books.map(book => {
      return (
        <List.Item
          key={book.key} 
          title={book.title}
          description={book.description}
          onPress={() => this.props.navigation.navigate('ShowBook', { bookKey: book.key })}
        />
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Home Page</Text>

        <Card>
          <List.Section title="Latest Books">
            {this._renderBooks()}
          </List.Section>
        </Card>

        <Button
            title="Add New Book"
            onPress={() => this.props.navigation.navigate('AddBook')}
          />
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
