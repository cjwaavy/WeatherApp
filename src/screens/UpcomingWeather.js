import React, {useEffect, useState} from "react";
import {Button, ImageBackground, View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image} from 'react-native';
import {Feather}   from '@expo/vector-icons'
import CurrentWeather from "./CurrentWeather";
import ListItem from "../components/ListItem";

const Empty = () => {
    
    return(
        <View style={{flex:1}}>
            <Text style={{fontSize: 50}}>404!!!</Text>
        </View>    
    )
}

const UpcomingWeather = (props) => {
    
    const {weather} = props
    useEffect(() => {
        (async () => {
            
        })()
    })
    const renderItem = ({item}) => (<ListItem 
        weather={item.weather[0].main} 
        temp={`${Math.round(item.main.temp)}°`} 
        temp_min={`${Math.round(item.main.temp_min)}°`} 
        temp_max={`${Math.round(item.main.temp_max)}°`} 
        feels_like={`${Math.round(item.main.feels_like)}°`}
        />);
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/clouds.jpg")}
                style={styles.image}
            >
            
            <FlatList
                data={weather}
                renderItem = {renderItem}
                style= {styles.listStyle}
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
                showsVerticalScrollIndicator={false}
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
    },
    listStyle:{
        paddingTop: 20
    }
})

export default UpcomingWeather