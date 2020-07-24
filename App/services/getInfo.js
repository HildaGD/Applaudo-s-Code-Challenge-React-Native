import axios from 'axios'

const getAnime = () =>
    axios.get(`https://kitsu.io/api/edge/anime`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    })
        .then(response => {
            //console.log(response)
            return Promise.resolve(response.data)
        }).catch(error => {
            console.log(error)
            return Promise.reject("Error to get info", error)
        });

export default getAnime