import React, {useEffect, useState} from "react";
import { View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

const Counter = () => {
    const{container, title} = styles
    // let count = 0
    const [count, setCount] = useState(() => {
        return 0
     })
    const [newCount, setNewCount] = useState(() => {
        return 0
    })
    const [errMsg, setErrorMsg] = useState(null)   
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted"){
            setErrorMsg(() => "Permission to access location was denied")
            return;
       } 
            let location = await Location.getCurrentPositionAsync();
            setLocation(() => {
                location
            })
        })
        
        const text = 'Waiting...'
        if (errMsg) {
            text = errMsg
        } else if (location){
            text = JSON.stringify(location)
        }
        
    })

    return (
        <SafeAreaView style ={container}>
            <View style={container}>
                <Text>
                    {text}
                </Text>
                <Text style={title}>{`count: ${count}`}</Text>
                <Button color="red" title="increment" onPress={() => {
                    setCount(count => count+1)
                }} 
                />
                <Button color="green" title="decerement" onPress={() => {
                    setCount(count => count-1)
                }}/>
                <Button color="red" title="increment" onPress={() => {
                    setNewCount(newCount => newCount+1)
                }} 
                />
                <Button color="green" title="decerement" onPress={() => {
                    setNewCount(newCount => newCount-1)
                }}/>
            </View>
        </SafeAreaView>        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'orange',
    },
    title:{
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }

})
export default Counter