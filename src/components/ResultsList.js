import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, res, navigation }) => {
    if (!res.length) return null;
    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={res}
                keyExtractor={(res) => res.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Detail', { id: item.id })
                            }
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        margin: 2,
        marginLeft: 10,
    },
});

export default withNavigation(ResultsList);
