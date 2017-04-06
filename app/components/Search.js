import React, { Component } from 'react';
import Requst from 'superagent'
import call from 'react-native-phone-call'
import API from './API'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView, AsyncStorage
} from 'react-native';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: styles,
            Items: [],
            Status: '',
            showItemFrom: false,
            showSearchFrom: true,
            showSearchResult: true,

        }
    }

        redirect(scene, accesToken) {
        this.props.navigator.push({
            name: scene,
            passProps: {
                AccesToken: accesToken
            }
        })

    }






    componentWillMount() {
//this.getToken()

    }

    Itemslist(term) {

        if (this.state.searchTerm.length >= 4) {

            this.setState({ Status: 'Loading ...' })

            API.getItem(term).then((res) => {


                this.setState({
                    Items: res
                })

                this.setState({
                    Status: ''
                })

            }).catch(function (err) {
                return err;
            })


        }
    }


    updateSearch = (text) => {
        if (text == '') {
            this.state.Items = []
        }
        this.setState({ searchTerm: text }, () => {

            this.Itemslist(this.state.searchTerm)

        })





    }



    handelSearchTerm(term) {

        return (x) => {
            return x.Title + ' ' + x.Address.toLowerCase().includes(term.toLowerCase() || !term)

        }

    }





    lookingFor(whats) {
        this.setState({ searchTerm: whats })
    }

    MakeACall(Phone_number) {
        const args = {
            number: Phone_number, // String value with the number to call
            prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
        }

        call(args).catch(console.error)


    }




    render() {
        let items = this.state.Items.filter(this.handelSearchTerm(this.state.searchTerm)).map(item => {

            return (
                <View>
                    <Text onPress={this.MakeACall.bind(this, item.Phone)} style={styles.resultStyle} key={item._id}>
                        {item.Title} - {item.Address} - {item.Phone} - {item.Phone2}</Text>
                </View>
            )

        })



        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Service, restaurant ... etc'
                    autoCapitalize='none' ref="searchInput" onChangeText={this.updateSearch.bind(this)} />
                <ScrollView>
                    <Text style={styles.Status}>{this.state.Status}</Text>
                    {items}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        borderWidth: 0,
        fontSize: 18,
        top: 10
    },

    resultStyle: {
        backgroundColor: '#efefef',
        color: '#333',
        margin: 5,
        padding: 7,
        textAlign: 'center',
        top: 50
    },
    Status: {
        top: 35,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

AppRegistry.registerComponent('Search', () => Search);
