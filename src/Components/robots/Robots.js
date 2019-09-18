import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import RobotUnit from './RobotUnit';
import RobotControl from './RobotControl';
import LandscapeStyle from '../../style/LandscapeStyle';

import {robotList} from 'ULtronDebugApp/src/res/json/robots.json';

// Redux import
import {connect} from 'react-redux';

class Robots extends Component {
    render() {
        return (
            <View style={LandscapeStyle.robots}>
                <ScrollView style={LandscapeStyle.robotsList}>
                    {this._renderRobot()}
                </ScrollView>
                <ScrollView style={LandscapeStyle.commandsList}>
                    {this._renderControls()}
                </ScrollView>
            </View>
        )
    };

    _renderRobot = () => {
        return robotList.map(robot => {
            return <RobotUnit
                style={LandscapeStyle.robotUnit}
                robotid={robot.id}
                mac={robot.MAC}
                team={robot.team}
                highlight={this.props.selectedRobot === robot.id}
                onPress={this.props.handleRobot.bind(this, robot.id)}
                key={'robot-' + robot.id}/>;
        });
    };

    _renderControls = () => {
        if (this.props.selectedRobot !== null) {
            return <RobotControl
                style={LandscapeStyle.robotControl}
                robotid={this.props.selectedRobot}
                commands={this.props.commandList}
                key={'robot-control-' + this.props.selectedRobot}/>;
        }
    };
}

const mapStateToProps = (state) => {
    const { robotRedux } = state;
    return { robotRedux }
};

export default connect(mapStateToProps)(Robots);
