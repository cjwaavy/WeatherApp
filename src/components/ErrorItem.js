import React from 'react'
import { View, StyleSheet, Text, Button} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import App from '../../App';
import Counter from '../demonstration/Counter';

const ErrorItem = ( props) => {
    const {errorMsg} = props
    console.log(errorMsg)
    
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <FontAwesome name="frown-o" size={50} color="#8ED5CA" />
            {/* <Text >Error Occured Somewhere</Text> */}
            <Text style={styles.textStyle}>
                {`Error message:\n${errorMsg}`}</Text>
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => {
                
            }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Retry</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Avenir-Book'
    },
    button:{
        marginTop: 25,
        paddingHorizontal: 80,
        paddingVertical: 20,
        backgroundColor: 'gray',
        borderRadius: '50%',
        
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    }
})
export default ErrorItem