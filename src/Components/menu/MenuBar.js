import React, {Component} from 'react'
import {View} from 'react-native'
import {menuOptions} from 'ULtronDebugApp/src/res/json/menu.json';
import MenuButton from './MenuButton'

// Redux import
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
// Redux Action import
import {changeMenu} from '../../../MenuAction';

import LandscapeStyle from '../../style/LandscapeStyle';

class MenuBar extends Component {
    render() {
        return (
            <View style={LandscapeStyle.menuBar}>{this._renderMenuOptions()}</View>
        )
    }

    _renderMenuOptions = () => {
        return menuOptions.map(option => {
                return <MenuButton
                    style={LandscapeStyle.menuButton}
                    value={option.name}
                    icon={option.icon}
                    highlight={this.props.robotRedux.selectedMenu === option.name}
                    onPress={this._handleMenu(option.name)}
                    key={option.key + '-menu'}/>;
        });
    };

    _handleMenu = (menuIndex) => {
        this.props.changeMenu(menuIndex);
        this.props.updateState(menuIndex);
    }
}

const mapStateToProps = (state) => {
    const { robotRedux } = state;
    return { robotRedux }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeMenu
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
