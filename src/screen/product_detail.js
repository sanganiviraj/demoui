import React,{useState} from "react";
import { StyleSheet, View, Image, Text, ScrollView, Pressable } from 'react-native'

const Product_detail = (props) => {
    const {navigation,route} = props
    const value = route.params.productdata.price
    const [counter,setcounter] = useState(1);
    const [totalvalue,settotalvalue] = useState(value);
    return (
        <ScrollView>
            <View style={styles.bg}>

                <View style={styles.box} >
                    <Image style={styles.img} source={{ uri: route.params.productdata.url }}>
                    </Image>

                </View>

                <View style={styles.box2} >
                    <Text style={styles.title}>  {route.params.productdata.name}
                    </Text>

                    <Text style={styles.desc}>  Description :
                    </Text>


                    <Text style={{ fontSize: 17, fontWeight: 500, color: '#808080', margin: 10, textAlign: 'justify' }}> A flower pot is a vessel designed to hold and nurture plants, such as flowers, herbs, or shrubs. Available in a variety of materials, including ceramic, terracotta, plastic, metal, and wood, flower pots come in various shapes and sizes to suit different plant types and aesthetic preferences. They often feature drainage holes to prevent waterlogging.</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={styles.total}>
                        <Pressable style={styles.caclc} onPress={ () => {
                            if(counter<=0){
                                setcounter(counter * 0)
                            }
                                setcounter( counter + 1);
                                settotalvalue(totalvalue * counter);
                            


                            
                        }}>
                            <Text style={{ fontSize: 40, fontWeight: 900, color: 'white', alignSelf: 'center' }}> +
                            </Text>
                        </Pressable>

                        <View style={{
                            // height:50,
                            borderRadius: 12,
                            justifyContent:'center',
                            margin: 5,
                            backgroundColor: 'pink',
                            height: 65

                        }}>

                            <Text style={{ fontSize: 40, fontWeight: 900, color: 'black', alignSelf: 'center' }}> {counter} </Text>


                        </View>

                        <Pressable style={styles.caclc} onPress={ () => {
                            if(counter<=0){
                                setcounter(counter * 0)
                            }
                                setcounter( counter - 1);
                                settotalvalue(totalvalue * counter);
                            
                        }}>
                            <Text style={{ fontSize: 40, fontWeight: 900, color: 'white', alignSelf: 'center' }}> -
                            </Text>
                        </Pressable>

                    </View>

                    <View style={styles.total}>
                        <Text style={{ fontSize: 40, fontWeight: 900, color: 'black', alignSelf: 'center' }}> Total </Text>
                        <View style={{ height: 1, backgroundColor: 'black', margin: 10 }}>
                        </View>

                        <Text style={{ fontSize: 35, fontWeight: 700, color: '#3E6145', alignSelf: 'center', marginTop: 25 }}> ₹ <Text style={{ fontSize: 35, fontWeight: 700, color: '#3E6145', alignSelf: 'center', marginTop: 25 }}>
                           {totalvalue}
                        </Text> 
                        </Text>

                    </View>



                </View>

                <View style={styles.payment}>
                    <Text style={{ fontSize: 30, fontWeight: 900, color: 'white', alignSelf: 'center', margin: 15 }}> Add To Cart</Text>

                </View>







            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    caclc: {
        backgroundColor: '#3E6145',

        borderRadius: 12,

        margin: 5,

    },
    inc_dec: {
        fontSize: 30,
        fontWeight: 900,
        color: 'white'
    },
    title: {
        fontSize: 35,
        fontWeight: 700,
        color: 'black',
        marginTop: 10,
        // marginLeft: 10,
        color:'#3E6145'

    },
    total: {
        backgroundColor: '#E5FBE4',
        width: 185,
        height: 200,
        margin: 5,
        borderRadius: 12,
        alignSelf: 'center'

    },

    desc: {
        fontSize: 24,
        fontWeight: 600,
        color: 'black',
        marginTop: 20,
        marginLeft: 5,
    },
    bg: {
        flex: 1,
        backgroundColor: 'white',

    },
    box: {
        backgroundColor: '#3E6145',
        height: 300,
        // width:400,
        margin: 5,
        borderRadius:12,
        justifyContent:'center'
        // justifyContent:'center'

    },
    box2: {
        borderRadius: 12,
        margin: 5,
        padding: 10,
        borderWidth:2,
        borderColor:'#3E6145'
    },
    img: {
        height: 290,
        width: 375,
        // margin: 20,
        alignSelf:'center',
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius:12

    },
    payment: {
        backgroundColor: '#3E6145',
        borderRadius: 12,
        margin: 5,
        // padding: 10,

    }




})

export default Product_detail;