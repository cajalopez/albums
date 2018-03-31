// Importar librerias para hacer el componente
import React from 'react';
import { Text, View } from 'react-native';

// Construir el componente
const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.HeaderText}</Text>
  </View>
);

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
export default Header;
