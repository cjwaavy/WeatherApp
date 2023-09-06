import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar} from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import IconText from "../components/IconText";


const City = () => {
    const {container, bgImage, cityName, countryName, cityText, icon, populationWrapper, rowLayout} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground style={bgImage}
                source={require("../../assets/city.jpg")}
            >
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={populationWrapper}>
                <Ionicons style={icon} name="person" size={50} color="red" />
                <Text style={cityText}>8000</Text>
                </View>
                <View style = {rowLayout}>
                    <View>
                        <IconText iconName="sunrise" iconColor="white" bodyText={`Sunrise\n6:00 AM`} bodyTextStyles={cityText}/>
                    </View>
                    <View>
                        <IconText iconName="sunset" iconColor="white" bodyText={`Sunset\n6:00 PM`} bodyTextStyles={cityText}/>
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
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "white"
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
    }
    }
)
export default City