import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    AsyncStorage
} from 'react-native';
import Search from './app/components/Search'
import Initial from './app/components/Initial'
import Login from './app/components/Login'



export default class Gdlmar extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }



    renderScene(route, navigator) {
        if (route.name == 'Initial') {
            return <Initial navigator={navigator} />
        }
        if (route.name == 'Search') {
            return <Search navigator={navigator} />

        }

        if (route.name == 'Login') {
            return <Login navigator={navigator} />

        }

    }






    componentWillMount() {
    }




    render() {
        //AsyncStorage.removeItem('ACCESS_Token')

        return (
            <Navigator initialRoute={{ name: 'Initial' }}
                renderScene={this.renderScene.bind(this)}
                />
        )
    }

}





AppRegistry.registerComponent('Gdlmar', () => Gdlmar);
