import React, { memo } from "react";
import { ImageBackground, StyleSheet,Pressable, Text, Vibration, View, Image, FlatList, ScrollView } from 'react-native';

const Data = [
    {
        name: 'Europhobia',
        url: 'data:image/jpeg;base64,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',
        price: '120',
        desc:' This flower pot exudes elegance with its smooth marble finish, featuring delicate veins of gray and white, making it a luxurious addition to any room.'
    },
    {
        name: 'Yucca Palm',
        url: 'https://www.pngkit.com/png/detail/83-832851_flower-pot-png-flower-on-pot-png.png',
        desc:' Reminiscent of a bygone era, this flower pot boasts a distressed, antique look with intricate hand-painted floral patterns, bringing a touch of nostalgia and timeless beauty.',
        price: '150'
    },
    {
        name: 'Leves life',
        url: 'https://www.pngitem.com/pimgs/m/2-26947_flower-pots-png-transparent-png.png',
        desc:'Clean lines and a sleek design define this flower pot, made of matte black ceramic, creating a contemporary aesthetic that complements minimalist and modern interior styles.',
        price: '170'
    },
    {
        name: 'Fiberglass',
        url: 'https://i.pinimg.com/originals/3a/17/9b/3a179b5bedbc6093623faa8098b976c2.jpg',
        desc:'Crafted with natural rattan or wicker, this flower pot embraces a bohemian vibe, adding texture and warmth to spaces with its organic and earthy appeal.',
        price: '600'
    },
    {
        name: 'Concrete',
        url: 'https://i5.walmartimages.com/asr/45e7d797-aae0-4b97-97be-f9730d6bd78a.51e5b4de3b7200030de6a908b836422f.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
        desc:'  Playful and colorful, this flower pot features a quirky design, like a smiling animal face or a whimsical pattern, infusing joy and a sense of childlike wonder into your surroundings.',
        price: '450'
    },
    {
        name: 'Terracotta',
        url: 'https://www.pngitem.com/pimgs/m/591-5910037_sunny-day-pitcher-of-daisies-yellow-flower-pot.png',
        price: '800',
        desc:'Geometric shapes take center stage in this flower pot, with its sharp angles and clean edges, adding a touch of modern geometric art to your home decor.'
    },
]


const MainHome = (props) => {
    return (
        <ScrollView>
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
                        <Pressable style={styles.list} 
                        onPress={() => {
                            props.navigation.push(
                                'Detail', {
                                productdata : item
                            }
                            )

                        }}
                        >
                            <Image
                                style={{ width: 170, height: 140, borderRadius: 12, alignSelf: 'center', marginTop: 5,resizeMode:'contain' }}
                                source={{ uri: item.url }}
                                imageStyle={{ borderRadius: 15 }}

                            ></Image>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: 'black', marginLeft: 5 }}> {item.name}
                                </Text>

                                <Text style={{ fontSize: 20, fontWeight: 800, color: '#11270F', marginRight: 10 }}> ₹<Text style={{ fontSize: 20, fontWeight: 800, color: '#11270F', }}>{item.price}
                                </Text></Text>




                            </View>

                        </Pressable>
                    )
                }}
            ></FlatList>
            </View>

            <Text style={{ fontSize: 24, fontWeight: 700, color: '#505444', marginLeft: 20 ,marginBottom:5,}}> Special For You </Text>


            {
                Data.map((Data)  => {
                    return(
                        <View style={styles.box}>
                        <Image
                        style={styles.bg}
                        source={{uri:Data.url}}
                        
                        ></Image>
    
                        <View style={{width:250,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',marginLeft:5}}>
                            <Text style={{fontSize:20,fontWeight:700,color:'white',marginBottom:10}}> {Data.name} </Text>
                            <Text style={{fontSize:12,fontWeight:700,color:'#BCBFBF',marginBottom:20}}> {Data.desc} </Text>
    
    
                        </View>
    
                       
    
                    </View>
                    )
                })
            }




        </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    bg:{
        height:120,
        width:100,
        borderRadius:12,
        marginLeft:5,
        resizeMode:'contain'

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