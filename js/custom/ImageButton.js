import React, {Component} from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';


export default class ImageButton extends Component {

    render() {
        return (
            <TouchableOpacity
                style={this.props.style}
                activeOpacity={0.5}
                onPress={this.props.onPress}>
                <Image style={[{resizeMode: 'contain'},this.props.imgStyle]} source={this.props.imgurl}/>
            </TouchableOpacity>
        );
    }
}

