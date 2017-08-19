import React from 'react';

import {View, Image, StyleSheet, Dimensions} from 'react-native';

export default class HomePage extends React.Component {


    topPicUrl() {
        var hours = new Date().getHours();
        if (hours >= 18 || hours <= 6) {
            return require("../res/bg_nighttime.png")
        }
        else {
            return require('../res/bg_daytime.png')
        }
    }

    render() {
        return (
            <View style={$.contain}>
                <Image style={$.top}
                       source={this.topPicUrl()}>

                </Image>
            </View>
        )
    }
}

const $ = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems:'center'
    },
    top: {
        height: 265,
        width:Dimensions.get('window').width-1,
        justifyContent:'center',
        alignItems:'center'
    }
});