import React from "react";
import {View,Text} from "react-native";

const Profile = ({route})=>{
    const {username}=route.params || {}
    return(
        <View>
            <Text>Hello, {username ?  `, ${username}` : ""} this is your profile page!</Text>
            <Text>2 posts</Text>
            <Text>190 folloers!</Text>
            <Text>89 following!</Text>
        </View>
    )
}

export default Profile;