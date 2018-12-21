import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LandscapeStyle from '../../style/LandscapeStyle';

class Home extends Component {
    render() {
        return (
            <View style={LandscapeStyle.home}>
                <Text>PATATE</Text>
            </View>
        )
    }
}
export default Home