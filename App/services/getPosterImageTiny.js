import axios from 'axios'

const getPosterImageTiny = (posterImageTiny) =>
    axios.get(posterImageTiny)
        .then(response => {
            console.log(response)
            return Promise.resolve(response.data)
        }).catch(error => {
            console.log(error)
            return Promise.reject("Error to get info", error)
        });

export default getPosterImageTiny