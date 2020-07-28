import React, { useEffect } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { SAVE_LIST_FAVORITES_ANIMES } from '../store/actions/types'
import { useDispatch, useSelector } from 'react-redux'

function Favorites() {
    const dispatch = useDispatch()
    const favoriteSeries = useSelector(state => state.anime.favoriteSeries)

    useEffect(()=>{

    }, [])

    return (
        <View style={styles.containerAnime}>

        </View>
    )
}

export default Favorites