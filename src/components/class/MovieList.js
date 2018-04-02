import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MovieDetail from '../functional/MovieDetail';

class MovieList extends Component {
  state = { movies: [] };

  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4dae9bc89d03d71d677be7a9e1fcf74b')
    .then(response => this.setState({ movies: response.data.results }));
  }

  renderMovies() {
    //map work in json arrays
    return this.state.movies.map(movie =>
      <MovieDetail key={movie.id} movie={movie} />
    );
  }

  render() {
   console.log(this.state);

   return (
      <ScrollView>
        {this.renderMovies()}
      </ScrollView>
   );
  }

}
/*
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
*/
export default MovieList;
