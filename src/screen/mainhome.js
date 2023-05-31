import React, { memo } from "react";
import { ImageBackground, StyleSheet, Text, Vibration, View, Image, FlatList, ScrollView } from 'react-native';

const Data = [
    {
        name: 'Europhobia',
        url: 'https://img.freepik.com/free-photo/colour-flowers-white-pot-isolated-white_231208-2933.jpg?w=2000',
        price: '120₹',
        desc:' This flower pot exudes elegance with its smooth marble finish, featuring delicate veins of gray and white, making it a luxurious addition to any room.'
    },
    {
        name: 'Yucca Palm',
        url: 'https://img.freepik.com/free-photo/snake-plant-terracotta-pot-home-decor_53876-133123.jpg',
        desc:' Reminiscent of a bygone era, this flower pot boasts a distressed, antique look with intricate hand-painted floral patterns, bringing a touch of nostalgia and timeless beauty.',
        price: '150₹'
    },
    {
        name: 'Leves life',
        url: 'https://www.pngitem.com/pimgs/m/2-26947_flower-pots-png-transparent-png.png',
        desc:'Clean lines and a sleek design define this flower pot, made of matte black ceramic, creating a contemporary aesthetic that complements minimalist and modern interior styles.',
        price: '170₹'
    },
    {
        name: 'Fiberglass',
        url: 'https://i.pinimg.com/originals/3a/17/9b/3a179b5bedbc6093623faa8098b976c2.jpg',
        desc:'Crafted with natural rattan or wicker, this flower pot embraces a bohemian vibe, adding texture and warmth to spaces with its organic and earthy appeal.',
        price: '600₹'
    },
    {
        name: 'Concrete',
        url: 'https://i5.walmartimages.com/asr/45e7d797-aae0-4b97-97be-f9730d6bd78a.51e5b4de3b7200030de6a908b836422f.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
        desc:'  Playful and colorful, this flower pot features a quirky design, like a smiling animal face or a whimsical pattern, infusing joy and a sense of childlike wonder into your surroundings.',
        price: '450₹'
    },
    {
        name: 'Terracotta',
        url: 'https://www.pngitem.com/pimgs/m/591-5910037_sunny-day-pitcher-of-daisies-yellow-flower-pot.png',
        price: '800₹',
        desc:'Geometric shapes take center stage in this flower pot, with its sharp angles and clean edges, adding a touch of modern geometric art to your home decor.'
    },
]


const MainHome = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Floweret
            </Text>
            <View style={styles.container}>
                <ImageBackground style={{ width: 350, height: 150 }}
                    source={{ uri: 'https://as1.ftcdn.net/v2/jpg/03/61/96/02/1000_F_361960277_jFzPgYjTUgVAEHtLRF9vIZPXUs8BvcUV.jpg' }}
                    imageStyle={{
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                    }}
                >

                    <Text style={{ fontSize: 22, fontWeight: 600, color: 'white', marginTop: 10, marginLeft: 10 }}> This Week Workshop
                    </Text>

                    <View style={{ width: 200, marginTop: 20, marginLeft: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={{ fontSize: 15, fontWeight: 500, color: '#BCBFBF', flexWrap: 'wrap' }}> Combining Different Plant In One Room

                        </Text>
                    </View>

                    <Text style={{ fontSize: 14, fontWeight: 300, color: '#BCBFBF', marginTop: 10, marginLeft: 10 }}>
                        16/06/2004 at 7:00pm


                    </Text>


                </ImageBackground>

            </View>


            <View style={styles.adding}>
                <Text style={{ fontSize: 20, fontWeight: 700, color: '#505444', marginLeft: 10 }}> Today's Discount</Text>
                <Text style={{ fontSize: 18, fontWeight: 500, color: '#BCBFBF', marginRight: 10 }}> See All </Text>

            </View>
            
            <View >
            <FlatList
                data={Data}
                horizontal
                // horizontal
                renderItem={({ item }) => {
                    return (
                        <View style={styles.list} >
                            <Image
                                style={{ width: 170, height: 140, borderRadius: 12, alignSelf: 'center', marginTop: 5 }}
                                source={{ uri: item.url }}
                                imageStyle={{ borderRadius: 15 }}

                            ></Image>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: 'black', marginLeft: 5 }}> {item.name}
                                </Text>

                                <Text style={{ fontSize: 20, fontWeight: 800, color: '#11270F', marginRight: 5 }}> {item.price}
                                </Text>




                            </View>

                        </View>
                    )
                }}
            ></FlatList>
            </View>

            <Text style={{ fontSize: 24, fontWeight: 700, color: '#505444', marginLeft: 20 ,marginBottom:5,}}> Special For You </Text>

            <FlatList
            data={Data}
            renderItem={({item}) => {
                return(
                    <View style={styles.box}>
                    <Image
                    style={styles.bg}
                    source={{uri:item.url}}
                    
                    ></Image>

                    <View style={{width:250,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',marginLeft:5}}>
                        <Text style={{fontSize:20,fontWeight:700,color:'white',marginBottom:10}}> {item.name} </Text>
                        <Text style={{fontSize:12,fontWeight:700,color:'#BCBFBF',marginBottom:20}}> {item.desc} </Text>


                    </View>

                   

                </View>
                )
            }}
            ></FlatList>




        </View>
    )
}



const styles = StyleSheet.create({
    bg:{
        height:120,
        width:100,
        borderRadius:12,
        marginLeft:5

    },
    box:{
        height:130,
        width:370,
        borderRadius:12,
        backgroundColor:'#137D4F',
        alignSelf:'center',
        marginVertical:15,
        // justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
        

    },
    list: {
        height: 200,
        width: 180,
        borderRadius: 15,
        backgroundColor: '#BBD7C7',
        margin: 10


    },

    adding: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    screen: {
        flex: 1,
        backgroundColor: 'white',

    },
    title: {
        fontSize: 32,
        fontWeight: 700,
        color: 'green',
        marginTop: 10,
        alignSelf: 'center'
    },
    container: {
        width: 350,
        height: 150,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        // backgroundColor:'green',
        marginTop: 20,
        justifyContent: 'space-between'



    }


})

export default MainHome;