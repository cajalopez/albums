//Importar libreria para crear componente
import React from 'react';
//import { Text } from 'react-native';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';
//Crear un componente
//Root Component [Solo este utiliza AppRegistry]
const App = () => (
    <View>
      <Header HeaderText={'Albums'} />
      <AlbumsList />
    </View>
  );

//Renderizar el componente
export default App;
