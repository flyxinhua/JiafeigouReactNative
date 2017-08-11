import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';


export default class OpacityButton extends Component {

    render() {
        return (
            <TouchableOpacity
                style={this.props.style}
                activeOpacity={this.props.activeOpacity}
                onPress={this.props.onPress}>
                <Text style={this.props.textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}