import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component{
  render(){
    let nome = 'André Barreto'
    let img = 'https://conteudo.imguol.com.br/c/esporte/8e/2021/09/11/depois-de-12-anos-cristiano-ronaldo-voltou-a-usar-a-camisa-do-manchester-united-1631369946867_v2_900x506.jpg.webp'
    return(
      <View>
        <Text style={{color:'blue'}}>     </Text>
        <Text style={{color:'blue'}}>Olá Mundo!!!!!!</Text>
        <Text style={{color:'blue', margin:10}}>Meu primeiro App!</Text>
        <Image 
        source={{uri: img}}
        style={{width:300, height:300}}
        />
        <Text>Seja Bem vindo, {nome}</Text>
        
        
      </View>

    );
   
    
  }
}

export default App;
