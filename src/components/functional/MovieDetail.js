import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const MovieDetail = (props) => (
  <Card>
    <CardSection>
      <View style={styles.headerContentStyle}>
        <Text>{props.movie.title}</Text>
        <Text>{props.movie.release_date}</Text>
      </View>
    </CardSection>
    <CardSection style={styles.rowStyle}>
      <View>
        <TouchableOpacity>
          <Image
          style={styles.posterStyle}
          source={{ uri: `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}` }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{props.movie.overview}</Text>
      </View>
    </CardSection>
  </Card>
);

// https://image.tmdb.org/t/p/w500/

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifeContent: 'space-around',
    alignItems: 'center'
  },
  posterStyle: {
    height: 150,
    width: 100
  },
  rowStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  textContainer: {
    flex: 1,
    height: 150,
    width: null, // Trick to fill the avaible space
    flexDirection: 'row',
    justifeContent: 'space-around',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 0,
    paddingRight: 5,
    paddingLeft: 5,
  }, 
  textStyle: {
    flexDirection: 'column',
    numberOfLines: 3,
    fontSize: 12,
    ellipsizeMode: 'head',
    textAlign: 'justify',
  },

};

export default MovieDetail;
