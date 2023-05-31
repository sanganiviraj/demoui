import React from "react";
import { StyleSheet, Text, Vibration, View } from 'react-native';
import MainHome  from "./mainhome";
import Product_detail from "./product_detail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator()

// const Stack = createStackNavigator();

const Home= () => {
    return(
    //     <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen name="Home" component={MainHome} initialParams={{item: 'qwerty'}} />
    //         <Stack.Screen name="Detail" component={Product_detail}  initialParams={{item: 'qwerty'}} />
    //     </Stack.Navigator>
    //    </NavigationContainer>
    <View > </View>

    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white',
    }


})

export default Home;