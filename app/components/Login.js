import React, { Component } from 'react';
import * as firebase from "firebase";


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';


firebase.initializeApp({
    apiKey: "AIzaSyDyXRp5tIubH8m-qxIhS0Msd3euPHty1io",
    authDomain: "gdlmar-748ad.firebaseapp.com",
    databaseURL: "https://gdlmar-748ad.firebaseio.com",
    storageBucket: "gdlmar-748ad.appspot.com",
    essagingSenderId: "161592672011"
});


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            Status: '',
            Email: '',
            Password: ''

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

    async StoreToken(accessToken) {

        try {
            await AsyncStorage.setItem('ACCESS_Token', accessToken);


        } catch (error) {
            console.log(error.toString())
        }
    }

    async getToken() {

        try {
            const value = await AsyncStorage.getItem('ACCESS_Token');
            if (value !== null)
                this.redirect('Search')
            else
                this.redirect('Login')

        } catch (error) {
            console.log(error.toString())
        }


    }


    async login() {

        try {
            let refreshToken = await firebase.auth()
                .signInWithEmailAndPassword(this.state.Email, this.state.Password).then(function (userData) {
                    return userData.refreshToken

                })

            this.StoreToken(refreshToken)
            this.redirect('Search')


        } catch (error) {
            console.log(error.toString())

            this.setState({
                Status: error.toString()
            })
        }

    }




    async signUp(email, pass) {

        try {   
          let refreshToken =  await firebase.auth()
                .createUserWithEmailAndPassword(this.state.Email, this.state.Password).then(function (user) {
        return user.refreshToken
                });


if(this.StoreToken(refreshToken))
this.redirect('Search')
//console.log(refreshToken)

            // Navigate to the Home page, the user is auto logged in

        } catch (error) {
            console.log(error.toString())
            this.setState({
                Status: error.toString()
            })
        }

    }


    componentWillMount() {

        //this.getToken()




    }


    render() {
        //firebase.auth().signOut()
        return (
            <View style={styles.View}>
                <Text style={styles.title}>Daleel Elgomhoria</Text>
                <Text style={styles.desc}>Search & Booking a service - restaurant - doctor around you</Text>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    onChangeText={(Email) => this.setState({ Email })}
                    />

                <TextInput
                    style={styles.input} onChangeText={(Password) => this.setState({ Password })}
                    placeholder='Password' secureTextEntry={true}
                    />

                <Text style={styles.Status}>{this.state.Status}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight onPress={() => this.signUp()}><Text style={styles.loginButton} >New User</Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this.login()}><Text style={styles.loginButton}>Login</Text></TouchableHighlight>
                </View>
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
        color: '#369FC2',
        padding: 4,
        borderBottomColor: '#369FC2',
        borderBottomWidth: 1,
        marginRight: 9,
    },
    TouchableHighlight: {
    }
});

AppRegistry.registerComponent('Login', () => Login);
