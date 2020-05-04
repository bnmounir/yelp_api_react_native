import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, err] = useResults();
    const filterByPrice = (price) => {
        return results.filter((res) => {
            return res.price === price;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {err.length ? <Text>{err}</Text> : null}

            <ScrollView>
                <ResultsList res={filterByPrice('$')} title='Eco Meals' />
                <ResultsList res={filterByPrice('$$')} title='Balanced Meals' />
                <ResultsList
                    res={[
                        ...filterByPrice(undefined),
                        ...filterByPrice('$$$'),
                        ...filterByPrice('$$$$'),
                    ]}
                    title='Mixed Meals'
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
