import React from "react";
import { StyleSheet, Text, Vibration, View } from 'react-native';
import MainHome  from "./mainhome";
import Product_detail from "./product_detail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// const Stack = createStackNavigator();

const Home= () => {
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainHome}  options={{
                 title: 'Home',
                 headerStyle: {
                   backgroundColor: '#BBD7C7',
                 },
                 headerTintColor: 'black',
                 headerTitleStyle: {
                   fontWeight: '600',
                 },
            }} />
            <Stack.Screen name="Detail" component={Product_detail} options={{
                   title: 'Details',
                   headerStyle: {
                     backgroundColor: '#3E6145',
                   },
                   headerTintColor: 'white',
                   headerTitleStyle: {
                     fontWeight: '600',
                   },
            }} />
        </Stack.Navigator>
       </NavigationContainer>

    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white',
    }


})

export default Home;