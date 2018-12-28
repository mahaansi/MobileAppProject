import * as React from 'react';
import { Text,TextInput, Button, View, StyleSheet } from 'react-native';

import { Card, List } from 'react-native-paper';
import { Constants } from 'expo';

export default class EditBookScreen extends React.Component {
  state = {
    open: false,
  };

  constructor(){
    super();
    this.state = {
      title: '',
      description: '',
      bookNo:''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Edit Book Details Page</Text>
        <Card>
        <Text>Title </Text>
        <TextInput style = {styles.text}
        onChangeText={(title) => this.setState({title})}
        underlineColorAndroid = "transparent" placeholder = 'Edit title here'/> 

        <Text>Description </Text>
        <TextInput style = {{padding:5}}
        onChangeText={(description) => this.setState({description})}
        underlineColorAndroid = "transparent" placeholder = 'Edit description here'/> 

        <Text>Book Number </Text>
        <TextInput style = {{padding:5}}
        onChangeText={(bookNo) => this.setState({bookNo})}
        underlineColorAndroid = "transparent" placeholder = 'Edit book number here'/>
        </Card>

        <Card style ={{marginTop:10}}> 
        <Button
            title="Save Changes"
            onPress={() => this.props.navigation.navigate('ShowBook')}
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
  text: {
    padding: 5,
  }
});
