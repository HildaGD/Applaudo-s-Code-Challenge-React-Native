/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import searchAnime from '../services/searchAnime'
import getCategory from '../services/getCategories'
import listCategories from './listCategories'
import styles from './styles'
//import { Searchbar } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import { set } from 'react-native-reanimated';
function Home({ navigation }) {
    const [adventure, setAdventure] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [action, setAction] = useState([]);
    const [parody, setParody] = useState([]);
    const [kids, setKids] = useState([]);
    const [drama, setDrama] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [listSearch, setListSearch] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        listAnime()



    }, []);

    async function listAnime() {
        try {
            const categoryAdventure = await getCategory('Adventure')
            const categoryComedy = await getCategory('Comedy')
            const categoryAction = await getCategory('Action')
            const categoryParody = await getCategory('Parody')
            const categoryKids = await getCategory('Kids')
            const categoryDrama = await getCategory('Drama')
            setAdventure(categoryAdventure.data)
            setComedy(categoryComedy.data)
            setAction(categoryAction.data)
            setParody(categoryParody.data)
            setKids(categoryKids.data)
            setDrama(categoryDrama.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(true)
        }

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


    const onChangeSearch = query => {
        setSearchQuery(query)
        updateSearch()
        setShowSearch(true)
        console.log(query)
    }

    async function updateSearch() {
        //setSearchQuery(search)
        const searchList = await searchAnime(searchQuery)
        setListSearch(searchList.data)

        //console.log('anime encontrado', listSearch)
    };

    function handleOnCleanSearchBar() {
        setSearchQuery('')
        setListSearch([])
        setShowSearch(false)
    }


    return (

        <View style={styles.containerAnime}>

            <SearchBar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onClear={handleOnCleanSearchBar}
                showLoading={true}
            />

            {
                showSearch &&
                <FlatList
                    data={listSearch}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                />
            }


            <ScrollView>
                {
                    !showSearch &&
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                        <Text style={styles.favorites}>Go to Favorites</Text>
                    </TouchableOpacity>
                }


                {loading && <ActivityIndicator />}
                {!showSearch && listCategories.map((item, index) => (
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