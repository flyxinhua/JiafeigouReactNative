import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';


export default class login extends React.Component {

    render() {
        return (
            <View style={$.contain}>
                <Text style={$.text}> 登陆 </Text>
                <TextInput style={$.input}/>
                <TextInput style={$.input}/>
                <TouchableOpacity
                    style={{alignItems: 'center', justifyContent: 'center', borderWidth: 0, marginTop: 50}}
                    onPress={() => {
                        Alert.alert('请输入账号或密码')
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
    text: {
        marginTop: 50,
        fontSize: 20,
        color: '#333',
        marginBottom: 50
    },
    input: {
        width: 200,
        height: 40,
        paddingLeft:58,
        paddingRight:58,
        borderRadius: 18,
        borderColor: '#333',
        borderWidth: 1,
        marginTop: 20
    }
});
