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


export default class login extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            show: false,
            pwd: '',
            account: '',
        }
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={$.contain}>
                {/* 头部view */}
                <View style={[$.header]}>
                    <View style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        width: Dimensions.get('window').width
                    }}>
                        {/*嵌套一个view 主要包含一个 X 按钮，和 ‘新用户’ 字体 */}

                        <TouchableOpacity
                            style={{alignItems: 'center', justifyContent: 'center',}}
                            onPress={() => {
                                goBack();
                            }}
                        >
                            {/*用TouchableOpacity 包着image X */}
                            <Image onPress={() => Alert.alert("新用户")} style={$.img}
                                   source={require('../res/album_icon_close.png')}/>
                        </TouchableOpacity>

                        <Text style={{fontSize: 16, color: '#4b9fdf'}}
                              onPress={() => Alert.alert("新用户")}> 新用户 </Text>
                    </View>


                    {/*用绝对布局撑满父布局，只有一个子布局，登录 */}
                    <View style={{
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={[$.text,]}> 登陆 </Text>
                    </View>
                </View>


                {/*账号输入框*/}
                <TextInput style={[$.input, {
                    marginTop: 44,
                    borderBottomColor: '#f2f2f2',
                    borderBottomWidth: 1,
                    paddingRight:38,
                    paddingLeft:38,
                }]}
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


                <View style={{
                    height: 42,
                    width: 320,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#f2f2f2'
                }}>

                    {/*密码输入框*/}
                    <TextInput style={[$.input, {flex: 1, paddingTop: 1,paddingLeft:38,}]}
                               underlineColorAndroid={'transparent'}
                               placeholder="密码"
                               secureTextEntry={!this.state.show}
                               textAlign='center'
                               onChangeText={
                                   text => {
                                       this.setState({pwd: text})
                                   }
                               }
                    />
                    <TouchableOpacity style={{marginHorizontal: 14}} onPress={() => {
                        this.setState({show:!this.state.show})
                    }
                    }>
                        <Image style={$.btn}
                               source={this.state.show?require('../res/icon_show_password.png')
                                   :require('../res/icon_hild_password.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {

                    }
                    }>
                        <Image style={$.btn} source={require('../res/icon_clear_text.png')}/>
                    </TouchableOpacity>

                </View>
                {/*按钮*/}
                <TouchableOpacity
                    style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}
                    onPress={() => {
                        Alert.alert(this.state.account+"/"+this.state.show)
                    }}
                >
                    <Text style={{fontSize: 20, color: '#333'}}>确定</Text>
                </TouchableOpacity>
            </View>
        )
    };

}

const $ = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
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
    text: {
        fontSize: 28,
        color: '#444444',
        flex: 1
    },
    input: {
        width: 320,
        height: 40,
        fontSize: 15,
        marginTop: 28,
        color: '#666666'
    }
});
