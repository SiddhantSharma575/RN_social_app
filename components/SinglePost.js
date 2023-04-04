import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"

const data = {
    id: 1,
    img: "https://i.dummyjson.com/data/products/1/1.jpg",
    caption: "My New Mobile",
    likes: 11,
    userName: "Siddhant",
    userImg: "https://randomuser.me/api/portraits/men/2.jpg"
}


const SinglePost = () => {
    return (
        <View style={styles.post__container}>
            <View style={styles.user_cont} >
                <Image source={{ uri: data.userImg }} style={{
                    width: 55,
                    height: 55,
                    borderRadius: 50,
                    overflow: "hidden",
                }} />
                <Text style={styles.user_text}>
                    {data.userName}
                </Text>
            </View>
            <Image source={{ uri: data.img }} style={styles.post_img} resizeMode="cover" />
            <Text style={styles.capt_text}>{data.caption}</Text>
            <View style={{
                flexDirection: "row", marginTop: 5, alignItems
                    : "center"
            }}>
                <Icon name="hearto" size={25} />
                <Text style={styles.like_text}>{data.likes}</Text>
            </View>
        </View >
    )
}

export default SinglePost

const styles = StyleSheet.create({
    post__container: {
        width: "80%",
        marginLeft: "10%",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    post_img: {
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: 5,
    },
    capt_text: {
        fontSize: 22,
        fontWeight: "500",
        color: "#000",
    },
    like_text: {
        fontSize: 22,
        marginLeft: 10
    },
    user_cont: {
        width: "100%",
        height: 55,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    user_text: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "500",
    }
})