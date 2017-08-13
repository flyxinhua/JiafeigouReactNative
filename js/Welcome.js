import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Alert,
} from 'react-native';
import HlightButton from './custom/HButton';
import OpactyButton from './custom/OpacityButton';

export default class Welcome extends Component {

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../res/Pic_Sign_in_CH.png')}/>

                <HlightButton style={[styles.login, styles.btn]}
                              underlayColor="#0FA8D8"
                              onPress={() => {
                                  navigate('Login');
                              }}
                              text='登录'
                              textStyle={styles.text}
                />

                <HlightButton style={[styles.reg, styles.btn]}
                              underlayColor="#FAFAFA"
                              onPress={() => {
                                  navigate('Register');
                              }}
                              text='注册'
                              textStyle={[styles.text, {color: '#0EA2D2'}]}
                />

                <OpactyButton textStyle={{fontSize: 16, marginTop: 20, color: '#BDBDBD'}}
                              text='随便看看'
                              activeOpacity={0.5}
                              onPress={() => {
                                  Alert.alert('别人说的话，随便听一听');
                              }}
                />


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 80,
        resizeMode: 'contain'
    },
    btn: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
    login: {
        marginTop: 50,
        backgroundColor: '#0EA2D2',

    },
    reg: {
        marginTop: 30,
        backgroundColor: '#F4F4F4',
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }

});