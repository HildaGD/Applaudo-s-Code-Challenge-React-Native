/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import style from './styles'

function Anime(props) {
    const [anime, setAnime] = useState([]);


    useEffect(() => { //did mount
        listAnime()
    }, []);

    async function listAnime() {
        const animation = props

        setAnime(animation)
        console.log('anime escogido', animation.route)
    }



    return (

        <View>
            <Text>
                Anime Information
       
                {props.route.params.props.id}
                
            </Text>

            <ScrollView>

            </ScrollView>



        </View>

    )
}




export default Anime