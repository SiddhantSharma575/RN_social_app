import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.main__container}>
            <StatusBar barStyle="dark-content" backgroundColor={"#eee"} />
            <View style={styles.login__container}>
                <Text style={styles.login_text} >Register</Text>
                <TextInput placeholder='Enter Name' style={styles.login__input} />
                <TextInput placeholder='Enter Email' style={styles.login__input} />
                <TextInput placeholder='Enter Password' style={styles.login__input} secureTextEntry={true} />
                <TouchableOpacity style={{ width: "100%", height: 40, marginLeft: 44, marginBottom: 10 }}>
                    <CustomButton text="Register" color="#fff" bg="#0398fc" />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "100%", height: 40, marginLeft: 44 }}   >
                    <CustomButton text="Login" color="#fff" bg="#0398fc" onPress={() => navigation.navigate("Login")} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    main__container: {
        flex: 1
    },
    login__container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    login_text: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
        letterSpacing: 1.5,
        marginBottom: 10
    },
    login__input: {
        width: "85%",
        borderWidth: 0.5,
        borderColor: "#000",
        borderRadius: 10,
        padding: 15,
        marginVertical: 15
    }
})