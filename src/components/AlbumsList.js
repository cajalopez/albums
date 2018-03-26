// Importar librerias para hacer el componente
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// Construir el componente
class AlbumsList extends Component {
  state = {};
  
  componentWillMount() {
    //console.log('componente probado');
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4dae9bc89d03d71d677be7a9e1fcf74b')
    .then(response => console.log(response));
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Albums List!!!</Text>
      </View>
   );
  }
}

// Estilo del texto en TextStyle
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //Posicion vertical
    alignItems: 'center', //Posicion Horizontal
    height: 60, //Altura
    paddingTop: 15, //Separacion TOP
    shadowColor: '#000', //Sombra
    shadowOffset: { width: 0, height: 2 }, //Sombra
    shadowOpacity: 0.2, //Sombra
    elevation: 2, // Discutura despues
    position: 'relative' // Discutura despues
  },
  textStyle: {
    fontSize: 20
  }
};

// Hacer el compnente disponible para la app
export default AlbumsList;
