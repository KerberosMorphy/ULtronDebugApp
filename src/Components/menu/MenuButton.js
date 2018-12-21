import React, {Component} from 'react';
import {Image, TouchableHighlight} from 'react-native';
import images from "../../res/img/image";
import LandscapeStyle from '../../style/LandscapeStyle';

class MenuButton extends Component {
    render() {
        return (
            <TouchableHighlight style={[LandscapeStyle.menuButton, this.props.highlight ? LandscapeStyle.menuButtonHighlighted : null]}
                                onPress={this.props.onPress}
                                underlayColor="#193441">
                <Image source={images[this.props.icon]} style={{ width: 64, height: 64 }}/>
            </TouchableHighlight>
        )
    }
}

export default MenuButton