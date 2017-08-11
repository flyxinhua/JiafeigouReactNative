import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class ThrLoginBtn extends React.Component {

    render() {
        return (
            <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <Image style={[{resizeMode: 'contain'},this.props.imgstyle]} source={this.props.imgurl}/>
                    <Text style={this.props.textStyle}>{this.props.text} </Text>
                </View>
            </TouchableOpacity>
        );
    }

}