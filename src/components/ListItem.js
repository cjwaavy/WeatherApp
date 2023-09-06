import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Feather}   from '@expo/vector-icons'

const ListItem = (props) => {
    const {weather, temp, temp_min,temp_max, feels_like} = props
    return(
        <SafeAreaView>
            <View style={styles.item}> 
                <Feather name="sun" size={50} color="black" />
                <Text>{weather}</Text>
                <Text>{temp}</Text>
                <Text>{temp_min}</Text>
                <Text>{temp_max}</Text>
                <Text>{feels_like}</Text>
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    item:{
        justifyContent:"center",
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth:3,
        borderRadius:5,
        backgroundColor:"pink",
        paddingVertical: 15
    }
})
export default ListItem