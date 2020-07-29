import {
    SAVE_ANIME,
    SAVE_LIST_FAVORITES_ANIMES
} from '../actions/types'

const initialState = { favoriteSeries: [] }

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_ANIME:
            const newSerie = action.seriesData;
            return {
                ...state,
                favoriteSeries: state.favoriteSeries.concat(newSerie)
            }

        case SAVE_LIST_FAVORITES_ANIMES:
            const newfavoriteSeriesList = action.favoriteSeriesList;
            return { 
                ...state,
                favoriteSeries: state.favoriteSeries.concat(newfavoriteSeriesList)
            }
        default:
            return state
    }
}