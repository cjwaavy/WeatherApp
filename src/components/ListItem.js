import React from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Feather}   from '@expo/vector-icons'
import { WeatherType } from "../utilities/WeatherType";

const ListItem = (props) => {
    const {weather, temp, temp_min,temp_max, feels_like} = props
    weather_ = weather
    return(
        <TouchableOpacity activeOpacity={.5}>
            <View style={styles.item}>
                <View style={styles.overrideOpacity}>
                    <Feather name={WeatherType(weather).icon} size={40} color="black" />
                    <Text>
                        {weather}
                    </Text>
                    <Text>
                        {temp}
                    </Text>
                    <Text>
                        {temp_min}
                    </Text>
                    <Text>
                        {temp_max}
                    </Text>
                    <Text>
                        {feels_like}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    item:{
        justifyContent:"center",
        marginVertical: 8,
        marginHorizontal: 20,
        gap: 1,
        borderWidth:3,
        borderRadius:"50%",
        paddingVertical: 15,
        backgroundColor: "rgba(196, 245, 237, 0.75)",
    },
    overrideOpacity:{
        opacity: 1,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
    }
})
export default ListItem