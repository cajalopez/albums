import React from 'react';
import { View } from 'react-native';
import Header from './src/components/functional/Header';
import MovieList from './src/components/class/MovieList';

const App = () => (
    <View>
      <Header HeaderText={'Popular Movies'} />
      <MovieList />
    </View>
  );

export default App;
