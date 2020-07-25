/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';
import getAnime from '../services/getInfo'
// import getPosterImageTiny from '../services/getPosterImageTiny'
// import { Appbar, Searchbar } from 'react-native-paper';
import {
    createMaterialTopTabNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import style from './styles'

function Home({ navigation }) {
    const [anime, setAnime] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedId, setSelectedId] = useState(null);

    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => { //did mount
        listAnime()
    }, []);

    async function listAnime() {
        const animation = await getAnime()

        setAnime(animation.data)
    }

    const renderItem = ({ item }) => (
        <Item  {...item} /> //title={item.attributes.titles.en} img={item.attributes.posterImage.tiny}
    );


    function Item(props) {

   
        return (
            <View style={style.item}>
    
                <TouchableOpacity onPress={() => navigation.navigate('Anime', {props})}>
                    <Image
                        style={style.tiny}
                        source={{
                            uri: props.attributes.posterImage.tiny,
                        }}
                    />
                </TouchableOpacity>
    
    
                {/* <Text style={style.title}>{title}</Text> */}
            </View>
        )
    }


    return (

        <View>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Anime')}
            />
            <ScrollView>
                <FlatList
                    horizontal
                    data={anime}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />


            </ScrollView>

        </View>

    )
}





export default Home