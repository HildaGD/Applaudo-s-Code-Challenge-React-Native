import axios from 'axios'

const categories = (text) =>
    axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${text}`, {
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

export default categories