import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar} from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import IconText from "../components/IconText";


const City = (props) => {
    const {cityInfo} = props
    const {container, bgImage, cityName, countryName, cityText, icon, populationWrapper, rowLayout, blackLayer} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground style={bgImage}
            
                source={require("../../assets/city.jpg")}
            >
                <View style={blackLayer}>
                    <Text style={[cityName, cityText]}>{cityInfo.name}</Text>
                    <Text style={[countryName, cityText]}>{cityInfo.country}</Text>
                    <View style={populationWrapper}>
                    <Ionicons style={icon} name="person" size={50} color="red" />
                    <Text style={cityText}>{cityInfo.population}</Text>
                    </View>
                    <View style = {rowLayout}>
                        <View>
                            <IconText iconName="sunrise" iconColor="white" bodyText={`Sunrise\n${(new Date(cityInfo.sunrise*1000)).toLocaleTimeString()}`} bodyTextStyles={cityText}/>
                        </View>
                        <View>
                            <IconText iconName="sunset" iconColor="white" bodyText={`Sunset\n${(new Date(cityInfo.sunset*1000)).toLocaleTimeString()}`} bodyTextStyles={cityText}/>
                        </View>
                    </View>
                </View>
                
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    bgImage:{
        height: "100%",
    },
    cityName:{
        fontSize: 40,
    },
    countryName:{
        fontSize: 20
    },
    cityText: {
        paddingTop: 15,
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",


    },
    icon:{
        alignSelf: "center",
    },
    populationWrapper:{
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        flexDirection: "row"
        },
    rowLayout:{
        marginTop: 100,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    blackLayer:{
        
    }
    }
)
export default City