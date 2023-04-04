import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import SinglePost from '../components/SinglePost'

const MainScreen = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
            <ScrollView style={styles.main_screen_cont}>
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    main_screen_cont: {

    }
})