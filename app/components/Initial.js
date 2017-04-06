import React, { Component } from 'react';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';


export default class Initial extends Component {


    redirect(scene, accesToken) {
        this.props.navigator.push({
            name: scene,
            passProps: {
                AccesToken: accesToken
            }
        })

    }

    async getToken() {

        try {
            const value = await AsyncStorage.getItem('ACCESS_Token');
            if (value !== null)
                this.redirect('Search')
            else
                this.redirect('Login')
                //console.log(value)

        } catch (error) {
            console.log(error.toString())
        }


    }



    componentWillMount() {
        this.getToken()

    }




    render() {
        return (
            <View>
                <Text></Text>
            </View>
        )
    }


}




AppRegistry.registerComponent('Initial', () => Initial);
