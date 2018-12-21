import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import MenuBar from './src/Components/menu/MenuBar';
import Home from './src/Components/home/Home';
import Robots from './src/Components/robots/Robots';
import Controller from './src/Components/controller/Controller';
import Connections from './src/Components/connections/Connections';
import About from './src/Components/about/About';
import Logs from './src/Components/logs/Logs';
import LandscapeStyle from './src/style/LandscapeStyle';

import {robotList} from 'ULtronDebugApp/src/res/json/robots.json';

class ULtronDebugApp extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            selectedMenu: 'Home',
            selectedRobot: null,
            commandList: null,
            robotList: robotList
        };
        this.bodyComponent = <Home/>;
        this.state = this.initialState;
    }

    render() {
        return (
            <View style={LandscapeStyle.appContainer}>
                <MenuBar myState={this.state.selectedMenu}
                         updateState={this.updateState.bind(this)}/>
                <View style={LandscapeStyle.body}>
                    {this.bodyComponent}
                </View>
            </View>
        )
    };

    updateState = (input) => {
        this.setState({
            selectedMenu: input
        });
        switch (input) {
            case 'Home':
                this.bodyComponent = <Home/>;
                break;
            case 'Connections':
                this.bodyComponent = <Connections/>;
                break;
            case 'Controller':
                this.bodyComponent = <Controller/>;
                break;
            case 'Logs':
                this.bodyComponent = <Logs/>;
                break;
            case 'Robots':
                this.bodyComponent = <Robots selectedRobot={this.state.selectedRobot}
                                             handleRobot={this.handleRobot.bind(this)}
                                             commandList={this.state.commandList}/>;
                break;
            case 'About':
                this.bodyComponent = <About/>;
                break;
        }
    };

    handleRobot = (input) => {
        this.setState({
            selectedRobot: input
        }, () => { this.handleCommand()});
    };

    handleCommand = () => {
        if (this.state.selectedRobot !== null) {
            this.state.robotList.map(robot => {
                if (robot.id === this.state.selectedRobot) {
                    this.setState({
                        commandList: robot.commands
                    })
                }
            })
        }
    };
}

export default ULtronDebugApp
AppRegistry.registerComponent('ULtronDebugApp', () => ULtronDebugApp);
