import { Text, Touchable, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CustomButton = ({ text, color, bg, onPress, mt }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{
            backgroundColor: bg,
            width: "85%",
            height: 40,
            marginBottom: 15,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: mt ? mt : 0
        }} onPress={onPress} >
            <Text style={{
                color: color
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton