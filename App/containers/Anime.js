/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles'
import { WebView } from 'react-native-webview';

function Anime(props) {
    const [anime, setAnime] = useState([]);


    useEffect(() => { //did mount
        listAnime()
    }, []);

    async function listAnime() {
        const animation = props

        setAnime(animation)
        console.log('anime escogido', animation.route)
    }

    function getVideo() {
        const video = props.route.params.props.attributes.youtubeVideoId
        if (video === '') {
            return <View />
        } else {
            return (
                <View >
                    <View style={{ padding: 20 }}>
                        <Text style={styles.label}>Trailer</Text>
                        <Text style={styles.label}>If you have any problems to watch video </Text>
                        <TouchableOpacity onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${props.route.params.props.attributes.youtubeVideoId}`)}>
                            <Text style={styles.label}>Click here to open in Youtube</Text>
                        </TouchableOpacity>
                    </View>

                    <WebView style={styles.video} source={{ uri: `https://www.youtube.com/embed/${props.route.params.props.attributes.youtubeVideoId}` }} />
                </View>
            )
        }
    }


    return (

        <View style={styles.containerAnime}>
            <ScrollView>
                <View style={{ flexDirection: "row", padding: 20 }}>
                    <View >
                        <Image style={styles.medium} source={{ uri: props.route.params.props.attributes.posterImage.medium, }} />

                    </View>
                    <View style={{ padding: 10, flex: 1, margin: 5 }}>
                        <Text style={styles.title} >{props.route.params.props.attributes.titles.en}</Text>
                        <Text style={styles.title}>{props.route.params.props.attributes.titles.ja_jp}</Text>
                        <Text style={styles.label}>Canonical Title</Text>
                        <Text style={styles.labelSubtitle}> {props.route.params.props.attributes.canonicalTitle}</Text>
                        <Text style={styles.label}>Type</Text>
                        <Text style={styles.labelSubtitle}>{props.route.params.props.attributes.subtype}, Episodes {props.route.params.props.attributes.episodeCount}</Text>
                        <Text style={styles.label}>Year</Text>
                        <Text style={styles.labelSubtitle}>{props.route.params.props.attributes.startDate} till {props.route.params.props.attributes.endDate}</Text>
                    </View>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={styles.label}>Genres</Text>
                    <Text style={styles.label}>{props.route.params.props.attributes.subtype}</Text>
                </View>

                <View style={{ flexDirection: "row", padding: 20 }}>

                    <View style={{ flex: 1 }}>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.label}>Average Rating</Text>
                            <Text style={styles.label}>{props.route.params.props.attributes.averageRating}</Text>
                        </View>


                        <View style={{ padding: 10 }}>
                            <Text style={styles.label}>Episode Duration</Text>
                            <Text style={styles.label}>{props.route.params.props.attributes.episodeLength} minutes</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>

                        <View style={{ padding: 10 }}>
                            <Text style={styles.label}>Age Rating</Text>
                            <Text style={styles.label}>{props.route.params.props.attributes.ageRating}</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.label}>Airing Status</Text>
                            <Text style={styles.label}>{props.route.params.props.attributes.status}</Text>
                        </View>
                    </View>


                </View>

                <View>
                    {getVideo()}
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={styles.label}>Synopsis</Text>
                    <Text style={styles.label}>{props.route.params.props.attributes.synopsis}</Text>
                </View>
            </ScrollView>

        </View>



    )
}




export default Anime