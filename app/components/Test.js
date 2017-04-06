import React, { Component } from 'react';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';


export default class Initial extends Component {

    



    render() {
        return (
            <View style={styles.View}>
           <Text>Test</Text>
            </View>
        )
    }


}


const styles = StyleSheet.create({
    View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        fontSize: 15,
    },
    title: {
        margin: 10,
        padding: 4,
        paddingLeft: 10,
        color: '#369FC2',
        textShadowColor: '#30c4cc',
        fontSize: 38
    },
    Status: {
        fontSize: 12,
        color: 'red',
        top: 9
    },
    desc: {
        fontSize: 12,
        padding: 6,
        top: -26,
        textShadowColor: '#369FC2',
        color: '#369FC2',

    },
    loginButton: {
        fontSize: 14,
        top: 12,
        textShadowColor: '#369FC2',
        color: '#369FC2',
        padding: 4,
        borderBottomColor: '#369FC2',
        borderBottomWidth: 3,
        width: 100
    }
});

AppRegistry.registerComponent('Test', () => Test);
