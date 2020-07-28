import { combineReducers } from 'redux'
import favoriteAnimeState from './app_reducer'


export default combineReducers({ 
    anime: favoriteAnimeState 
 })