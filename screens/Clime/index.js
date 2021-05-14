import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

import { colors } from '../../utils/index';

import { WEATHER_API_KEY, WEATHER_BASE_URL } from '@env'

import WeatherInfo from '../../components/WeatherInfo';
import UnitsPicker from '../../components/UnitsPicker';
import ReloadIcon from '../../components/ReloadIcon';
import WeatherDetails from '../../components/WeatherDetails';
import { useDispatch } from 'react-redux';

export default function Home({ route }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric')
  const dispatch = useDispatch();

  const { city } = route.params;

  useEffect(() => {
    city ? loadWithCityName() : loadWithPosition()
  },[unitsSystem])

  const loadWithCityName = async () => {
    setCurrentWeather(null)
    setErrorMessage(null)

    try{
    const WEATHER_API = `${WEATHER_BASE_URL}q=${city}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
    
    const response = await fetch(WEATHER_API);
    const result = await response.json();
      
    if(response.ok){
      setCurrentWeather(result)
    } else {
      setErrorMessage(result.message)
      }
    }catch(err){
      setErrorMessage(err.message)
    }
  }

  const loadWithPosition = async () => {
    setCurrentWeather(null)
    setErrorMessage(null)

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if(status !== 'granted'){
        setErrorMessage('Acess to localtion is needed to run the app!');
        return
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const WEATHER_API = `${WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(WEATHER_API);
      const result = await response.json();
      
      if(response.ok){
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }
    }catch(err){
      setErrorMessage(err.message)
    }
  }

  if(currentWeather){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
          <ReloadIcon load={loadWithPosition} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem} />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}> {errorMessage} </Text>
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});
