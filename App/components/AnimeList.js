// /* eslint-disable prettier/prettier */
// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';
// import getAnime from '../services/getInfo'
// import searchAnime from '../services/searchAnime'
// import getCategory from '../services/getCategories'
// import listCategories from './listCategories'
// import styles from '../containers/styles'

// function AnimeList({ navigation }) {
//     const [anime, setAnime] = useState([]);

//     // useEffect(() => { //did mount
//     //     listAnime()
//     // }, []);

//     async function listAnime() {
//         const animation = await getCategory('Drama')
//         setAnime(animation.data)

//     }

//     async function lookUpAnime(query) {

//         setSearchQuery(query)
//         const search = searchAnime(searchQuery)

//         console.log('anime encontrado', search)
//     }

//     const renderItem = ({ item }) => (
//         <Item  {...item} />
//     );


//     function Item(props) {


//         return (
//             <View style={styles.item}>


//                 <TouchableOpacity onPress={() => navigation.navigate('Anime', { props })}>
//                     <Image
//                         style={styles.tiny}
//                         source={{
//                             uri: props.attributes.posterImage.tiny,
//                         }}
//                     />

//                 </TouchableOpacity>


//                 {/* <Text style={style.title}>{title}</Text> */}
//             </View>
//         )
//     }




//     return (

//         <View style={styles.containerAnime}>
//             <ScrollView>

//                 <FlatList
//                     horizontal
//                     data={anime}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id}
//                 />


//             </ScrollView>

//         </View>

//     )
// }





// export default AnimeList