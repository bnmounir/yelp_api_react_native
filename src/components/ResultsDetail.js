import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri:
                        result.image_url ||
                        'https://images.unsplash.com/photo-1561651823-34feb02250e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1556&q=80',
                }}
                style={styles.img}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                <Octicons name='star' />
                {result.rating} {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 150,
        borderRadius: 5,
        // marginHorizontal: 5,
    },
    name: {
        fontWeight: 'bold',
        margin: 2,
    },
    container: {
        margin: 10,
    },
});

export default ResultsDetail;
