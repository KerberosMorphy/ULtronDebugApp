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

// Redux import
import {Provider, connect} from 'react-redux';
import {createStore} from "redux";
import appReducer from './AppReducer';

// JSON list de Robot pour test
import {robotList} from 'ULtronDebugApp/src/res/json/robots.json';

const store = createStore(appReducer);

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
            <Provider store={ store }>
                <View style={LandscapeStyle.appContainer}>
                    <MenuBar myState={store.selectedMenu}
                             updateState={this.updateState.bind(this)}/>
                    <View style={LandscapeStyle.body}>
                        {this.bodyComponent}
                    </View>
                </View>
            </Provider>
        )
    };

    updateState = (input) => {
        // this.setState({
        //     selectedMenu: input
        // });
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
                this.bodyComponent = <Robots selectedRobot={store.selectedRobot}
                                             handleRobot={this.handleRobot.bind(this)}
                                             commandList={store.commandList}/>;
                break;
            case 'About':
                this.bodyComponent = <About/>;
                break;
        }
    };

    handleRobot = (input) => {
        this.setState({
            selectedRobot: input
        }, () => {
            this.handleCommand()
        });
    };

    handleCommand = () => {
        if (store.selectedRobot !== null) {
            store.robotList.map(robot => {
                if (robot.id === store.selectedRobot) {
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
