import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from './MainScreen'
import UploadScreen from './UploadScreen'
import ChatScreen from './ChatScreen'
import ProfileScreen from './ProfileScreen'
import Icon from "react-native-vector-icons/AntDesign";


const Tab = createBottomTabNavigator()

const Home = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name='MainScreen' component={MainScreen} options={{
                title: "Home", tabBarIcon: () => (
                    <Icon name="home" size={25} />
                )
            }} />
            <Tab.Screen name='UploadScreen' component={UploadScreen} options={{
                title: "Upload", tabBarIcon: () => (
                    <Icon name="upload" size={25} />
                )
            }} />
            <Tab.Screen name='ChatScreen' component={ChatScreen} options={{
                title: "Chats", tabBarIcon: () => (
                    <Icon name="wechat" size={25} />
                )
            }} />
            <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{
                title: "Profile", tabBarIcon: () => (
                    <Icon name="profile" size={25} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default Home;

const styles = StyleSheet.create({})