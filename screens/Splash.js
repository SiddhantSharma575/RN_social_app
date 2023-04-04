import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            const getData = async () => {
                const value = await AsyncStorage.getItem("user")
                if (value) {
                    navigation.navigate("Home")
                } else {
                    navigation.navigate("Login")
                }
            }
            getData()
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.img} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
})