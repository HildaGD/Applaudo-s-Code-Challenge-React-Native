import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SAVE_ANIME } from '../store/actions/types'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';

function Bookmark(props) {

    const [favorite, setFavorite] = useState([])
    const dispatch = useDispatch()

    async function saveAnime() {
        try {
            let series = await AsyncStorage.getItem("favoriteList")
            let favoritesSeries = await JSON.parse( series) || "[]"
            let findSerieInFavoriteSeries = favoritesSeries.some(serie => serie.id === props.id);

            if (findSerieInFavoriteSeries) {
                console.log("this anime is already in favorites")
            } else {
                favoritesSeries.push(props)
                //favorite.push(props)
                setFavorite(props)
                await AsyncStorage.setItem('favoriteList', JSON.stringify(favoritesSeries))
                let anime = await AsyncStorage.getItem('favoriteList')
                console.log(JSON.parse(anime))
                dispatch({type: SAVE_ANIME, seriesData: props})
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