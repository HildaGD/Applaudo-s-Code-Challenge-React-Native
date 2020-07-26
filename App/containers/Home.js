/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, SectionList } from 'react-native';
import getAnime from '../services/getInfo'
import searchAnime from '../services/searchAnime'
import getCategory from '../services/getCategories'
import listCategories from './listCategories'
import { Searchbar } from 'react-native-paper';

import styles from './styles'

function Home({ navigation }) {
    const [adventure, setAdventure] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [action, setAction] = useState([]);
    const [parody, setParody] = useState([]);
    const [kids, setKids] = useState([]);
    const [drama, setDrama] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedId, setSelectedId] = useState(null);

    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => { //did mount
        listAnime()
    }, []);

    async function listAnime() {
        const categoryAdventure = await getCategory('Adventure')
        const categoryComedy = await getCategory('Comedy')
        const categoryAction = await getCategory('Action')
        const categoryParody = await getCategory('Parody')
        const categoryKids = await getCategory('Adventure')
        const categoryDrama = await getCategory('Drama')
        setAdventure(categoryAdventure.data)
        setComedy(categoryComedy.data)
        setAction(categoryAction.data)
        setParody(categoryParody.data)
        setKids(categoryKids.data)
        setDrama(categoryDrama.data)
    }

    async function lookUpAnime(query) {

        setSearchQuery(query)
        const search = searchAnime(searchQuery)

        console.log('anime encontrado', search)
    }

    const renderItem = ({ item }) => (
        <Item  {...item} />
    );


    function Item(props) {


        return (
            <View style={styles.item}>


                <TouchableOpacity onPress={() => navigation.navigate('Anime', { props })}>
                    <Image
                        style={styles.tiny}
                        source={{
                            uri: props.attributes.posterImage.tiny,
                        }}
                    />

                </TouchableOpacity>


                {/* <Text style={style.title}>{title}</Text> */}
            </View>
        )
    }


    function returnData(name) {
        switch (name) {
            case 'Adventure':
                return adventure
                break;
            case 'Comedy':
                return comedy
                break;
            case 'Action':
                return action
                break;
            case 'Parody':
                return parody
                break;
            case 'Kids':
                return kids
                break;
            case 'Drama':
                return drama
                break;
            default:
            // code block
        }
    }


    return (

        <View style={styles.containerAnime}>

            <Searchbar
                placeholder="Search"
                onChangeText={lookUpAnime}
                value={searchQuery}
            />
            <ScrollView>

                {listCategories.map((item, index) => (
                    <View key={index}>

                        <Text style={{ color: '#fff', marginLeft: 20, fontSize: 18 }}>
                            {item.name}
                        </Text>


                        <FlatList
                            horizontal
                            data={returnData(item.name)}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />

                    </View>
                ))}






            </ScrollView>

        </View>

    )
}





export default Home