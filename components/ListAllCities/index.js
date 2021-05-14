import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ListOneCities from '../ListOneCities';

const ListAllCities = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}> Previous Searches </Text>
      <ListOneCities />
      <ListOneCities />
      <ListOneCities />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  containerText: {
    fontSize: 23,
    fontWeight: 'bold'
  }
})

export default ListAllCities;