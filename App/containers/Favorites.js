import React, { useEffect, useState } from 'react'
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { SAVE_LIST_FAVORITES_ANIMES } from '../store/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';


function Favorites({ navigation }) {
    const dispatch = useDispatch()
    const favoriteSeries = useSelector(state => state.anime.favoriteSeries)
    const [showFavorites, setShowFavorite] = useState(false)
    useEffect(() => {
        listFavorites()
        //AsyncStorage.clear()
        
    }, [])

    async function listFavorites() {
        try {
            let fav = await AsyncStorage.getItem("favoriteList")
            let favoriteSeriesFromLocalStorage = JSON.parse(fav) //|| "[]"
            // setFavoritePictures(arrayOfPicturesFromLocalStorage)

            // if (favoriteSeriesFromLocalStorage.length > 0) {
            //     setDeleteAllPictures(true)
            // } else {
            //     setDeleteAllPictures(false)
            // }
            //dispatch({ type: SAVE_LIST_FAVORITES_ANIMES, favoriteSeriesList: favoriteSeriesFromLocalStorage });
            console.log('favorites', favoriteSeriesFromLocalStorage)
            console.log('favorites use selector ', favoriteSeries)
            console.log('leght favorite series', favoriteSeries.length)
            console.log('leght favorite series favoriteSeriesFromLocalStorage', favoriteSeriesFromLocalStorage.length)
            if (favoriteSeries.length === 0) {
                if(favoriteSeriesFromLocalStorage.length===0){
                   setShowFavorite(false) 
                }else{
                    dispatch({ type: SAVE_LIST_FAVORITES_ANIMES, favoriteSeriesList: favoriteSeriesFromLocalStorage });
                    setShowFavorite(true)
                }
                
            } else {
                setShowFavorite(true)
            }
        } catch (error) {
            console.log(error)
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

    return (
        <View style={styles.containerAnime}>
            {showFavorites &&
                <FlatList
                    data={favoriteSeries}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                />
            }

            {!showFavorites &&
            <View style={{flex: 1, padding: 20}}>
                <Text style={styles.label}>
                    You don't have any favorite anime
                </Text>
            </View>

                
            }


        </View>
    )
}

export default Favorites