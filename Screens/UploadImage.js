import * as React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import {
  image,
} from 'react-navigation';

import { Card, List } from 'react-native-paper';
import { Constants , ImagePicker ,  Permissions} from 'expo';

export default class UploadImageScreen extends React.Component {
  state = {
    open: false,
    image: " ",
  };

  render() {
    let {image}= this.state;

    return (
      <View style={styles.container}>
      
       <Image source={{ uri: image}} style={styles.imgCircle}/>
        <Text style={styles.paragraph}>Add Book Page</Text>
        <Card>
        <Button title="Take a picture" 
      onPress={this.btmCameraClicked}/>
      <Text></Text>
      <Button title="Gallery"
       onPress={this.btmGalleryClicked}/>
       <Text></Text>
       
         <Button
            title="Using bar code"
            onPress={() => this.props.navigation.navigate('Barcode')}
          />
          <Text></Text>
          <Text></Text>
          <Button
            title="save"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </Card>
        <Text></Text>

      
      </View>
    );
  }

  askPermissionAsync = async ()=>{
    await Permissions.askAsync (Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
   };

   btmGalleryClicked= async ()=> {
    await this.askPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled){
      this.setState({ image : result.uri});

    }
   };


   btmCameraClicked= async ()=> {
    await this.askPermissionAsync();
    let result = await ImagePicker.launchCameraAsync(
      {allowsEditing: true,
       aspect:[4, 3] }
    );
    if (!result.cancelled){
      this.setState({ image : result.uri});

    }
   };
  // export default UploadImageScreen;
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
  imgCircle:{
      width:200,
      height:200,
      borderRadius:200/2

  },
});
