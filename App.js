import React from 'react';
import { View } from 'react-native';
import Header from './src/components/functional/Header';
import MovieList from './src/components/class/MovieList';

const App = () => (
    <View style={styles.viewStyle}>
      <Header HeaderText={'Popular Movies'} />
      <MovieList />
    </View>
  );

  const styles = {
    viewStyle: {
      flex: 1
    }
  };

export default App;
