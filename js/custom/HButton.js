import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
} from 'react-native';


export default class HlightButton extends Component {

    render() {
        return (
            <TouchableHighlight
                style={this.props.style}
                activeOpacity={0.5}
                underlayColor={this.props.underlayColor}
                onPress={this.props.onPress}>
                <Text style={this.props.textStyle}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}