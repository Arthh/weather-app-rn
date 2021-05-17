import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { colors } from '../../utils';

import ListOneCities from '../ListOneCities';

const ListAllCities = ({ navigation }) => {
  const cities = useSelector(state => state.city.cities) 

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}> Previous Searches </Text>
      {cities.length !== 0 ? cities.map(city => (
        <ListOneCities city={city} key={city.name} navigation={navigation} />
      )) : <Text style={styles.emptyCities}> Empty List! </Text>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 20,
  },
  containerText: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  emptyCities: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.PRIMARY_COLOR
  }
})

export default ListAllCities;