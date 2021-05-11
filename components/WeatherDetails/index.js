import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils'; 
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

const WeatherDetails = ({ currentWeather, unitsSystem }) => {
  const { 
    main: { feels_like, humidity, pressure },
    wind: { speed }
  } = currentWeather;

  const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

  return (
    <>
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR} />
            <Text>Feels: like {feels_like.toFixed(1)}°</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
            <Text>Humidity: {humidity} %</Text>
          </View>
        </View>
      </View>

      <View style={{...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
        <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="weather-windy" size={25} color={PRIMARY_COLOR} />
            <Text> Wind Speed: {windSpeed}</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR} />
            <Text> Pressure: {pressure} hPa</Text>
          </View>
        </View>
      </View>
      
    </View>
    <Text style={{textAlign: 'center'}} >Dev: Arthur Ulhôa</Text>
    </>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: 'auto',
    marginBottom: 30,
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20
  }
});

export default WeatherDetails;