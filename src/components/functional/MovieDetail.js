import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const MovieDetail = (props) => (
  <Card>
    <CardSection>
     <Text>{props.movie.title}</Text>
    </CardSection>
  </Card>
);

export default MovieDetail;
