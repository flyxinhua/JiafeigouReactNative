
import React from 'react';
import {View,Text,Dimensions,Alert,StyleSheet} from 'react-native';
import ImageButton from './ImageButton';



export  default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[$.header]}>

                {/*用绝对布局撑满父布局，只有一个子布局，登录 */}
                <View style={$.absolute}>
                    <Text style={[$.text,]}> {this.props.titleText} </Text>
                </View>
                <View style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    width: Dimensions.get('window').width
                }}>
                    {/*嵌套一个view 主要包含一个 X 按钮，和 ‘新用户’ 字体 */}

                    <ImageButton
                        style={{alignItems: 'center', justifyContent: 'center'}}
                        imgStyle={$.img}
                        imgurl={this.props.lefturl}
                        onPress={ this.props.back}
                    />

                    <Text style={{fontSize: 16, color: '#4b9fdf'}}
                          onPress={this.props.next}> {this.props.rightText} </Text>
                </View>
            </View>
        );
    }
}


const $ = StyleSheet.create({
    absolute: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    } ,
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
    text: {
        fontSize: 28,
        color: '#444444',
    },
});