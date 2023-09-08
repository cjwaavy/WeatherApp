import React, {useEffect,useState} from "react"
import Tabs from "./src/components/Tabs"
import { ActivityIndicator, SafeAreaView,View, Text, StyleSheet } from "react-native"
import * as Location from 'expo-location'
import UpcomingWeather from "./src/screens/UpcomingWeather"
import {WEATHER_API_KEY} from "@env"
import { useGetWeather } from "./src/hooks/useGetWeather"
import { NavigationContainer } from "@react-navigation/native"
import { WeatherType } from "./src/utilities/WeatherType"
const App = () => {
  const[weather, loading, errorMsg] = useGetWeather()
  if (weather && weather.list){
    console.log(weather)
    return(
      <Tabs weather = {weather}/>
      // <SafeAreaView>
      //   <Text>{JSON.stringify(weather)}</Text>
      // </SafeAreaView>
    )
  }
  // console.log(weather, loading, errorMsg)
  
  return (
      <View style={styles.container}>
      <ActivityIndicator size="large" color="blue"/>
      </View>
      
    // <UpcomingWeather />
    // <SafeAreaView>
    //   <Text styles={{color:"black"}}>{JSON.stringify(location)}</Text>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex:1
  }
})

export default App