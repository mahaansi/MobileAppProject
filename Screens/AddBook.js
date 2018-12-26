import React, {Component} from 'react';
import {Image,StyleSheet, TextInput, Text, View} from 'react-native';
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
export default class App extends Component {
  state={
    BookTitle: 'book title is here', 
    Description: 'description is here', 
    BookImage: 'the image of the book should be here',
    barCode: 'the bar code scanned will be here', 
    Booknumber: 1245463
  }
  render() { 
    return (
      
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'}} style={styles.img}/>
        <View style={styles.textContainer}>
          <Text >
                  <Text style={{fontWeight: "bold"}}>
            Title: 
                  </Text>
            {this.state.BookTitle}
          </Text>
          <Text >
                  <Text style={{fontWeight: "bold"}}>
            Number: 
                  </Text>
            {this.state.Booknumber}
          </Text>
          <Text >
                  <Text style={{fontWeight: "bold"}}>
            Description:  
                  </Text>
            {this.state.Description}
          </Text>
          
      </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder='BookTitle' onChangeText={(BookTitle)=>this.setState({BookTitle: BookTitle})}/>
        <TextInput placeholder='Description' onChangeText={(Description)=>this.setState({Description: Description})}/>
        <TextInput placeholder='barCode' onChangeText={(barCode)=>this.setState({barCode: barCode})}/>
        <TextInput placeholder='Booknumber' onChangeText={(Booknumber)=>this.setState({Booknumber: Booknumber})}/>
        <TextInput placeholder='BookImage' onChangeText={(BookImage)=>this.setState({BookImage: BookImage})}/>
      </View>
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    borderColor: "gold", 
    borderWidth: 1, 
  },
  card: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderWidth: 1, 
    borderRadius: 10,
    margin: 10, 
    marginTop: 100, 
    marginBottom: 100,
    borderColor: '#000',
    justifyContent: "space-evenly"
  },
  img: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 278,
    // height: 100
  },
  textContainer:{
    margin: 10
  }, 
  inputContainer:{ 
    // flex: 1,
    borderColor: "gold", 
    borderWidth: 1}

});
