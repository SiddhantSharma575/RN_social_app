import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from '../components/CustomButton'
// import * as   ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';


const UploadScreen = () => {


    const handlePickImage = async () => {
        await ImagePicker.openPicker({

            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <View style={styles.upload_screen}>
            <Text style={styles.header}>Upload an Image</Text>
            <TextInput placeholder='Add Captions..' style={styles.capt} />
            <View style={styles.imgPicCONT}>
                <View style={{ width: "60%", marginTop: 10 }}>
                    <CustomButton text="Pick Image" color="#fff" bg="#0398fc" onPress={handlePickImage} />
                </View>
                <Image source={{ uri: "https://randomuser.me/api/portraits/men/2.jpg" }} style={{
                    width: 45,
                    height: 45,
                }} />
            </View>
            <CustomButton text="Upload" color="#fff" bg="#0398fc" mt={30} />
        </View>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    upload_screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    header: {
        fontSize: 22,
        color: "#000",
        marginBottom: 44
    },
    capt: {
        borderWidth: 0.5,
        width: 250,
        padding: 15,
        borderRadius: 10
    },
    imgPicCONT: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-around",
        alignItems: "center"
    }
})