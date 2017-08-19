import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
    Dimensions,
} from 'react-native';

import ImageButton from './custom/ImageButton';
import OpacityButton from './custom/OpacityButton';
import ThrLoginBtn from './custom/ThrLoginBtn';
import Header from './custom/Header';
import HomePage from "./HomePage";

export default class Login extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            show: false,
            pwd: '',
            account: '',
        }
    }




    clearPwd(name) {
        this.refs[name].setNativeProps({text: ''});
    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={$.contain}>

                {/*将 navigation 传递给Header 这个布局，方便它使用退回按钮功能*/}
                <Header navigation={this.props.navigation}
                        back={() => navigate('Welcome')}
                        next={() => navigate('Register')}
                        rightText="新用户"
                        lefturl={require('../res/album_icon_close.png')}
                        titleText="登陆"
                />

                {/*账号输入框*/}
                <TextInput
                    style={[$.input, $.line, {marginTop: 44, paddingHorizontal: 45}]}
                    underlineColorAndroid={'transparent'}
                    placeholder="请输入手机号/邮箱"
                    placeholderTextColor='#cecece'
                    textAlign='center'
                    onChangeText={
                        text => {
                            this.setState({account: text})
                        }
                    }
                />


                <View style={[$.incenter, $.line, {height: 42, width: 320}]}>

                    {/*密码输入框*/}
                    <TextInput
                        ref={'inputpwd'}
                        style={[$.input, {marginTop: 0, paddingHorizontal: 45}]}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor='#cecece'
                        placeholder="密码"
                        secureTextEntry={!this.state.show}
                        textAlign='center'
                        onChangeText={
                            text => {
                                this.setState({pwd: text})
                            }
                        }
                    />

                    <View style={[$.incenter, {
                        top: 0, bottom: 0, right: 0,
                        position: 'absolute', justifyContent: 'flex-end', flexDirection: 'row'
                    }]}>
                        <ImageButton
                            style={{marginHorizontal: 10}}
                            onPress={() =>
                                this.setState({show: !this.state.show})
                            }
                            imgStyle={$.btn}
                            imgurl={this.state.show ?
                                require('../res/icon_show_password.png')
                                : require('../res/icon_hild_password.png')}
                        />

                        <ImageButton
                            imgurl={require('../res/icon_clear_text.png')}
                            imgStyle={$.btn}
                            onPress={() => {
                                this.clearPwd('inputpwd');
                            }}

                        />
                    </View>

                </View>
                {/*按钮*/}

                <OpacityButton
                    style={[$.incenter, {
                        marginTop: 50, width: 172, height: 42, borderWidth: 1,
                        borderColor: '#d8d8d8', borderRadius: 20,
                    }]}
                    onPress={()=>{navigate('HomePage')}}
                    textStyle={{fontSize: 17, color: '#4B9FD5'}}
                    text='确定'
                />


                <Text style={{fontSize: 12, color: '#999999', marginTop: 30}} onPress={() =>
                    Alert.alert("忘记密码")
                }> 忘记密码?</Text>

                <Bottom/>
            </View>
        )
    };

}


class Bottom extends React.Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 34,
                    flexDirection: 'row'
                }}>
                    <ThrLoginBtn
                        style={{marginRight: 24}}
                        onPress={() => Alert.alert('Login By QQ')}
                        text="QQ登录"
                        textStyle={$.thrtext}
                        imgstyle={$.img}
                        imgurl={require('../res/icon_qq.png')}/>
                    <View style={{width: 1, height: 13, backgroundColor: '#9e9e9e'}}/>
                    <ThrLoginBtn
                        style={{marginLeft: 24}}
                        onPress={() => Alert.alert('Login By WeiBo')}
                        text="微博登录"
                        textStyle={$.thrtext}
                        imgstyle={$.img}
                        imgurl={require('../res/ico_weibo.png')}/>
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

    incenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 33,
        height: 48,
        width: Dimensions.get('window').width,
    },

    img: {
        width: 18,
        height: 18
    },
    btn: {
        width: 18,
        height: 18
    },
    input: {
        width: 320,
        height: 40,
        fontSize: 15,
        marginTop: 28,
        color: '#666666'
    },
    thrtext: {
        marginLeft: 9,
        fontSize: 13,
        color: '#7c7c7c'
    },
});
