import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        try {
            const { data } = await yelp.get(`/${id}`);
            setResult(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    return !result ? (
        <View>
            <Text>Detail Screen</Text>
            <Text>Loading...</Text>
        </View>
    ) : (
        <View>
            <Text style={styles.header}>Detail Screen</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => {
                    console.log('line 34 ', photo);
                    return photo;
                }}
                renderItem={({ item }) => {
                    console.log('line 38 ', item);
                    return <Image style={styles.img} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        margin: 5,
    },
    img: {
        // width: 250,
        height: 200,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'stretch',
    },
});

export default DetailScreen;
