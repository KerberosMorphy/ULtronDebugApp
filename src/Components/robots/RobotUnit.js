import React, {Component} from "react";
import {View, Text, Image, TouchableHighlight} from "react-native";
import LandscapeStyle from '../../style/LandscapeStyle';
import images from "../../res/img/image";

// Redux import
import {connect} from 'react-redux';

class RobotUnit extends Component {
    render() {
        return (
            <TouchableHighlight
                style={[LandscapeStyle.robot, this.props.highlight ? LandscapeStyle.robotHighlighted : null]}
                underlayColor="#008B00"
                onPress={this.props.onPress}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{ width: 170, height: 170}}>
                        <Image source={images[this.props.robotid]} style={{width: 170, height: 150}}/>
                    </View>
                    <View style={{paddingLeft: 8, flexGrow: 1, flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>Batterie : </Text>
                            <View style={{flexGrow:2, minWidth: 50, backgroundColor: 'red'}}>
                            </View>
                            <View style={{flexGrow: 2, minWidth: 50, backgroundColor: 'black'}}>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>MAC Address : {this.props.mac}</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>Team : {this.props.team}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const mapStateToProps = (state) => {
    const { robotRedux } = state;
    return { robotRedux }
};

export default connect(mapStateToProps)(RobotUnit);
