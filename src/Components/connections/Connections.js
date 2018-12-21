import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import LandscapeStyle from '../../style/LandscapeStyle';
import { BleManager } from 'react-native-ble-plx';
import BLEModule from "./BLEModule";

class Connections extends Component {
    constructor(props) {
        super(props);
        this.manager = new BleManager(); // Une seule instance est permise, détruire et recréer au besoin .destroy()
    }
    render() {
        return (
            <View style={LandscapeStyle.robots}>
                <View>
                    // start scan, stop scan, connect, disconnect
                </View>
                <View>
                <ScrollView style={LandscapeStyle.robotsList}>
                    {this._renderBLEModule()}
                </ScrollView>
                <ScrollView style={LandscapeStyle.commandsList}>
                </ScrollView>
                </View>
            </View>
        )
    }
    _renderBLEModule() {
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
    }
    scanAndConnect() {
        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error (scanning will be stopped automatically)
                return
            }

            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            if (device.name === 'TI BLE Sensor Tag' ||
                device.name === 'SensorTag') {

                // Stop scanning as it's not necessary if you are scanning for one device.
                this.manager.stopDeviceScan();

                // Proceed with connection.
                return this.deviceConnection(device);
            }
        });
    }
    deviceConnection(device) {
        device.connect()
            .then((device) => {
                return device.discoverAllServicesAndCharacteristics()
            })
            .then((device) => {
                // Do work on device with services and characteristics
            })
            .catch((error) => {
                // Handle errors
            });
    }
}
export default Connections
