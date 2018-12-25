import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

import { Card, List } from 'react-native-paper';
import { Constants } from 'expo';

export default class HomeScreen extends React.Component {
  state = {
    open: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Home Page</Text>
        <Card>
          <List.Section title="Latest Books">
            <List.Item
              title="First Item"
              description="By: Maha"
              onPress={() => this.props.navigation.navigate('ShowBook')}
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title="Second Item"
              description="By: Ali Zahi"
              onPress={() => this.props.navigation.navigate('ShowBook')}
              left={() => <List.Icon icon="book" />}
          />
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
