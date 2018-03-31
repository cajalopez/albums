// Importar librerias para hacer el componente
import React, { Component } from 'react';
import { Text, View } from 'react-native';
//
import axios from 'axios';

// Construir el componente Funcional
/*
Propiedades de los componente funcional

  1.- Usado para datqa persistenta data
  2.- No manejan consulta de datos a un API ()
  3.- Faciles de escribir.

*/
class AlbumsList extends Component {
  state = {};
  // Justo antes de montar el componente.
  componentWillMount() {
  // Tipo de funcion: Ciclo de vida (CV) - Component will mount
  // Notificacion de component asociado CV: console.log('Component will mount AlbumsList
  // Funcionalidad: consumir libreria para consultar API bajo arquitectura REST.
  // Recursos: http://rallycoding.herokuapp.com/api/music_albums [Direccion API para consumir Axio]
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4dae9bc89d03d71d677be7a9e1fcf74b')
    // MUST DO: leer los valores del API para crear la lista de albunesç
    // CREAR EJEMPLO PARA CUNSUMIR EN UN COMPONENTE UN Array JSON de un servidor RESTFUL.
    .then(response => console.log(response));
  }
  // Inicio de la creacion de la pantalla.
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
    backgroundColor: '#F8F8F8', // Color de fondo
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
    fontSize: 20 // Tamaño de fuente
  }
};

// Hacer el compnente disponible para la app
export default AlbumsList;
