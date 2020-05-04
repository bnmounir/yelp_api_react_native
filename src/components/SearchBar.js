import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Feather style={styles.icon} name='search' onPress={onTermSubmit} />
            <TextInput
                style={styles.input}
                placeholder='Search'
                value={term}
                onChangeText={(text) => onTermChange(text)}
                autoCapitalize='none'
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        margin: 10,
    },
    input: {
        margin: 5,
        flex: 1,
        fontSize: 20,
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;
