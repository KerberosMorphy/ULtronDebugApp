import React, {Component} from 'react'
import {View} from 'react-native'
import {menuOptions} from 'ULtronDebugApp/src/res/json/menu.json';
import MenuButton from './MenuButton'

import LandscapeStyle from '../../style/LandscapeStyle';

class MenuBar extends Component {
    render() {
        return (
            <View style={LandscapeStyle.menuBar}>{this._renderMenuOptions()}</View>
        )
    }

    _renderMenuOptions() {
        return menuOptions.map(option => {
                return <MenuButton
                    style={LandscapeStyle.menuButton}
                    value={option.name}
                    icon={option.icon}
                    highlight={this.props.myState === option.name}
                    onPress={this.props.updateState.bind(this, option.name)}
                    key={option.key + '-menu'}/>;
        });
    }
}

export default MenuBar