import React from 'react'
import {TextInput, View, Text, StyleSheet, Alert, Dimensions} from 'react-native'
import Header from './custom/Header';
import ImageButton from './custom/ImageButton';


export default class Register extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            clear: false,
            account: '',
        }
    }


    showClearBtn(show) {
        if (show) {
            return (
                <ImageButton
                    imgStyle={$.clearbtn}
                    imgurl={require('../res/icon_clear_text.png')}
                    onPress={
                        () => {
                            this.refs['inputAccount'].setNativeProps({text: ''});
                        }
                    }
                />);
        } else {
            return null;
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={$.contain}>
                <Header navigation={this.props.navigation}
                        back={() => navigate('Welcome')}
                        next={() => navigate('Login')}
                        rightText="登陆"
                        lefturl={require('../res/album_icon_close.png')}
                        titleText="注册"
                />


                <View style={[$.inputlayout, $.line]}>
                    <TextInput
                        ref="inputAccount"
                        style={$.account}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor='#cecece'
                        placeholder="密码"
                        textAlign='center'
                        onChangeText={
                            text => {
                                this.setState({account: text})
                            }
                        }

                        onFocus={() => this.setState({clear: true})}

                        onBlur={() => this.setState({clear: false})}
                    />

                    {this.showClearBtn(this.state.clear)}
                </View>

            </View>
        );
    }
}

const $ = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputlayout: {
        marginTop: 44,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
    },
    account: {
        flex: 1,
    },
    clearbtn: {
        width: 18,
        height: 18
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
});

