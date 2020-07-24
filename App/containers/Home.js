/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import getAnime from '../services/getInfo'
import getPosterImageTiny from '../services/getPosterImageTiny'
import { Appbar, Searchbar } from 'react-native-paper';
import style from './styles'

function Home() {
    const [anime, setAnime] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => { //did mount
        listAnime()
    }, []);

    async function listAnime() {
        const animation = await getAnime()

        setAnime(animation.data)
    }

    const _handleSearch = () => console.log('Searching');




    return (

        <View>
            <Appbar.Header>
                <Appbar.Content title="Title" subtitle="Subtitle" />


            </Appbar.Header>
            <Searchbar
                
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <ScrollView>

                <View>
                    <Text>HomeScreen</Text>



                    <View>
                        {anime.map((item, index) => (
                            <View key={index}>

                                <Text>
                                    {item.attributes.posterImage.tiny}
                                </Text>
                                <View>
                                    <Image
                                        style={style.tiny}
                                        source={{
                                            uri: item.attributes.posterImage.tiny,
                                        }}
                                    />
                                </View>


                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default Home