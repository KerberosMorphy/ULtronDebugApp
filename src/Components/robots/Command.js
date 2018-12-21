import React, {Component} from 'react'
import {Button, Text, TextInput, View} from 'react-native';
import LandscapeStyle from "../../style/LandscapeStyle";

class Logs extends Component {
    constructor(props) {
        super(props);
        this.command = this.props.command;
        this.actiontype = this.props.actiontype;
        this.onstyle = {width: '25%', backgroundColor: '#00ff00'};
        this.offstyle = {width: '25%', backgroundColor: '#ff0000'};
        this.style = this.onstyle;
        this.doubleactionstate = true;
        this.list = [];
        this.listIndex = 0;
    };

    render() {
        return (
            <View style={{width: '50%', paddingTop: 15, paddingLeft: 15, flexDirection: 'column'}}>
                {/*<View style={{paddingEnd: 15, alignItems: 'center'}}>*/}
                    {/*<Text style={{fontWeight: 'bold', fontSize: 18}}>{this.props.description}</Text>*/}
                {/*</View>*/}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', justifyItems: 'stretch'}}>
                    <View>
                        <Button
                            style={LandscapeStyle.commandButton}
                            title={this.props.description}
                            onPress={this.sendCommand(this.props.command)}
                            colors="#DFE0E1"/>
                    </View>
                    <View style={[LandscapeStyle.circle, {backgroundColor: 'gray'}]}/>
                </View>
            </View>
        )
    };

    _renderType = (actionType) => {
        switch (actionType) {
            case "doubleaction":
                return <View>
                    <View style={{paddingEnd: 15, alignItems: 'center'}}><Text>{this.props.description}</Text></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', justifyItems: 'stretch'}}>
                        <View>
                            <Button
                                style={LandscapeStyle.commandButton}
                                title={this.props.description}
                                onPress={this.sendCommand(this.props.command)}
                                colors="#DFE0E1"/>
                        </View>
                        <View style={[LandscapeStyle.circle, {backgroundColor: 'blue'}]}/>
                        <View style={[LandscapeStyle.circle, {backgroundColor: 'gray'}]}/>
                    </View>
                </View>;
            case "singleaction":
                return <View>
                    <View style={{paddingEnd: 15, alignItems: 'center'}}><Text>{this.props.description}</Text></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', justifyItems: 'stretch'}}>
                        <View>
                            <Button
                                style={LandscapeStyle.commandButton}
                                title={this.props.description}
                                onPress={this.sendCommand(this.props.command)}
                                colors="#DFE0E1"/>
                        </View>
                        <View style={[LandscapeStyle.circle, {backgroundColor: 'gray'}]}/>
                    </View>
                </View>;
            case "liveinfo":
                break;
            case "inputaction":
                if (this.listIndex !== 0) {
                    this.listIndex++;
                }
                return <View>
                    <View style={{paddingEnd: 15, alignItems: 'center'}}><Text>{this.props.description}</Text></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', justifyItems: 'stretch'}}>
                        <View>
                            <Button
                                style={LandscapeStyle.commandButton}
                                title={this.props.description}
                                onPress={this.sendCommand(this.props.command)}
                                colors="#DFE0E1"/>
                        </View>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.list[this.listIndex]}
                        />
                    </View>
                </View>;
        }
    };

    sendCommand = (fct) => {
        switch (this.actiontype) {
            case "doubleaction":
                if (this.doubleactionstate) {
                    this.style = this.offstyle;
                    this.doubleactionstate = false;
                } else {
                    this.style = this.onstyle;
                    this.doubleactionstate = true;
                }
                fct(this.command);
                break;
            case "singleaction":
                // fct(this.command);
                break;
            case "liveinfo":
                // fct(this.command);
                break;
            case "inputaction":
                // fct(this.command);
                break;
        }
    };
}

export default Logs
