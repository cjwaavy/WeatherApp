import React, {useEffect, useState} from "react";
import {Button, ImageBackground, View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image} from 'react-native';
import {Feather}   from '@expo/vector-icons'
import CurrentWeather from "./CurrentWeather";
import ListItem from "../components/ListItem";

import {WEATHER_API_KEY} from "@env"
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}

const Empty = () => {
    
    return(
        <View style={{flex:1}}>
            <Text style={{fontSize: 50}}>404!!!</Text>
        </View>    
    )
}
// const DATA = []
const DATA = [
    {
    weather : "rain",
    main:{
        temp: 290.45,
        temp_min: 297.56,
        temp_max: 300.05,
        feels_like: 297.56
    },
    key: "0"

},
{
    weather: "sunny",
    main: {
      temp: 294.32,
      temp_min: 298.12,
      temp_max: 303.45,
      feels_like: 299.01,
    },
    key: "1"
  },
  {
    weather: "cloudy",
    main: {
      temp: 288.76,
      temp_min: 293.45,
      temp_max: 296.87,
      feels_like: 294.02,
    },
    key: "2"
  },
  {
    weather: "thunderstorm",
    main: {
      temp: 289.87,
      temp_min: 295.01,
      temp_max: 298.76,
      feels_like: 296.45,
    },
    key: "3"
  },
]
 
const UpcomingWeather = () => {
    // const [state, setState] = useState(() => 0)
    // useEffect(() => {
    // (async () => {
    //     // fillData();
    //     // const response = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    //     const response = await fetch('https://www.boredapi.com/api/activity/')
    //     const json = await response.json()
    //     if(response.ok){
    //         console.log(json)
    //         return
    //     } 
    // })()

    // },[state])
    useEffect(() => {
        (async () => {
            
        })()
    })
    const renderItem = ({item}) => (<ListItem 
        weather={item.weather} 
        temp={item.main.temp} 
        temp_min={item.main.temp_min} 
        temp_max={item.main.temp_max} 
        feels_like={item.main.feels_like}
        />);
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/clouds.jpg")}
                style={styles.image}
            >
            <Text>Upcoming Weather</Text>
            
            <FlatList
                data={DATA}
                renderItem = {renderItem}
                // renderItem = {({item}) => {

                // }}
                // ItemSeparatorComponent={() => (
                //     <View style={{
                //         backgroundColor:"black", 
                //         marginHorizontal:300, marginVertical:10, height:20, 
                //         borderRadius:20}}
                //         />
                //     )}
                    ListEmptyComponent={Empty}
            />
            {/* <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
              <Text style={{fontSize: 50,color: "white"}}>{state}</Text>  
              <Button
                color="red" 
                title="Refresh API News"
                style={{marginBottom: 20}}
                onPress={() => setState(state + 1)}/>
            </View> */}
            
            </ImageBackground>
            {/* <CurrentWeather /> */}
            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{

        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue",
    },
    image:{
        flex: 1
    }
})

export default UpcomingWeather