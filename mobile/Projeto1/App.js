import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component{
  render(){
    return(
      <View>
        <Text>Olá Mundo!!</Text>
        <Text style={{color:'blue', margin:10}}>Meu primeiro App!</Text>
      </View>
    );
   
    
  }
}

export default App;
