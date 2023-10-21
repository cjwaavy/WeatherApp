import React, {useEffect,useState} from "react"
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from "@env"
export const useGetWeather = () => {
    const[loading, setLoading] = useState(()=>true)
    const[errorMsg, setErrorMsg] = useState(null);
    const[weather, setWeather] = useState([]); 
    const[latitude, setLatitude] = useState(() => []);
    const[longitude, setLongitude] = useState(() => []);
  
  
    const fetchWeatherData = async (lat, lon) => {
      try {
        // setLatitude(() =>  lat)
        // setLongitude(() => lon)
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
        let json = await response.json()
        setWeather(() => json)
      } catch (error) {
        console.log('from catch block:'+error)
      } finally{
        setLoading(() => false)
      }
    }
  
  useEffect(() => {
    (async() => {
      let {status} = await Location.getForegroundPermissionsAsync()
      if (status !== "granted"){
        setErrorMsg(() => "Permission to access location was denied")
        return
      }
      let location = await Location.getCurrentPositionAsync()
  
      
      await(fetchWeatherData(location.coords.latitude, location.coords.longitude))
    })()
  }, [])
  return [weather, loading, errorMsg]
}