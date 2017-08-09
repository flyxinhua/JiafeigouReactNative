import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

export default class Setup extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('./res/Pic_Sign_in_CH.png')}/>
                <TouchableHighlight style={[styles.login, styles.btn]}
                                    underlayColor='#0FA8D8'
                                    onPress={() => {

                                    }}>
                    <Text style={styles.text}>登录 </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.reg, styles.btn]}
                                    underlayColor="#FAFAFA"
                                    onPress={() => {

                                    }}>
                    <Text style={[styles.text, {color: '#0EA2D2'}]}>注册 </Text>
                </TouchableHighlight>

                <Text style={{fontSize:16,marginTop:20,color:'#BDBDBD'}}>随便看看</Text>

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