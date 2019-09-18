import React, {Component} from "react";
import {View, Button, Text} from "react-native";
import LandscapeStyle from '../../style/LandscapeStyle';
import Command from "./Command";

// Redux import
import {connect} from 'react-redux';

class RobotControl extends Component {
    constructor(props) {
        super(props);
        this.switchState = 0;
        this.type = null;
        this.style = null;
    };
    render() {
        return (
            <View style={LandscapeStyle.control}>
                {this._renderControl(this.props.commands, this.props.robotid)}
            </View>
        )
    };

    _renderControl = (commandsList, id) => {
        return commandsList.map(command => {
            this.setStyle(command.actiontype);
            return <Command
                style={LandscapeStyle.command}
                command={command.command}
                action-type={command.actiontype}
                description={command.description}
                key={'robot-' + id + '-command-' + command.command}>
            </Command>;
        });
    };

    setStyle = (type) => {
        switch(type) {
            case "doubleaction":
                this.style = LandscapeStyle.doubleaction;
                break;
            case "singleaction":
                this.style = LandscapeStyle.singleaction;
                break;
            case "liveinfo":
                this.style = LandscapeStyle.liveinfo;
                break;
            case "inputaction":
                this.style = LandscapeStyle.inputaction;
                break;
        }
    };

    commandCall(command) {
    }
}

const mapStateToProps = (state) => {
    const { robotRedux } = state;
    return { robotRedux }
};

export default connect(mapStateToProps)(RobotControl);
