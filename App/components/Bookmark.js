import React, { useState, useEffect } from 'react';
import { View, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SAVE_ANIME } from '../store/actions/types'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';

function Bookmark(props) {

    const [favorite, setFavorite] = useState([])
    const favoriteSeriesL = useSelector(state => state.anime.favoriteSeries)
    const dispatch = useDispatch()

    async function saveAnime() {
        try {
            let series = await AsyncStorage.getItem("favoriteList")
            if (series === null) {
                favorite.push(props)
                setFavorite(favorite)
                await AsyncStorage.setItem('favoriteList', JSON.stringify(favorite))
                dispatch({ type: SAVE_ANIME, seriesData: props })
               // console.log('serie is null')
            } else {
                let favoritesSeries = await JSON.parse(series) // || "[]"
                let findSerieInFavoriteSeries = favoritesSeries.some(anime => anime.id === props.id);
                console.log('bookmark findSerieInFavoriteSeries', findSerieInFavoriteSeries)
                if (findSerieInFavoriteSeries ===true ) {
                    console.log("this anime is already in favorites")
                    ToastAndroid.show("This anime is already in favorites", ToastAndroid.SHORT);
                } else {
                    favoritesSeries.push(props)
                    //favorite.push(props)
                    setFavorite(props)
                    await AsyncStorage.setItem('favoriteList', JSON.stringify(favoritesSeries))
                    let anime = await AsyncStorage.getItem('favoriteList')
                    //console.log(JSON.parse(anime))

                    dispatch({ type: SAVE_ANIME, seriesData: props })
                    ToastAndroid.show("Save in Favorites", ToastAndroid.SHORT);
                }
            }

        } catch (e) {
            // error reading value
            console.log('error en save anime', e)
        }
    }

    return (
        <View>
            <Icon
                raised
                name='heart'
                type='font-awesome'
                color='#f50'
                onPress={() => saveAnime()} />
        </View>
    )
}

export default Bookmark