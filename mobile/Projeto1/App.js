import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class App extends Component{

  render(){
   
    
    return(
      <View style={{flex:1, backgroundColor:'#222'}}>
         <View style={{height:65, backgroundColor:'red'}}></View>
         <View style={{flex:1, backgroundColor:'#FFF'}}></View>
         <View style={{height:65, backgroundColor:'red'}}></View>
      </View>
    );
  }
}

export default App;




