import {View, Text } from "react-native";
import React from "react";

import { ScreenStyles } from "../../styles/style";


const Home = () => {
    return(
    <View style={ScreenStyles.Container}>
        <Text style={ScreenStyles.Text}>home</Text>
    </View>
    )
}

export default Home;