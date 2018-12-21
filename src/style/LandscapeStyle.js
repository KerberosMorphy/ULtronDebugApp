import {StyleSheet} from 'react-native';

let LandscapeStyle = StyleSheet.create({
    menuBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3E606F',
        alignItems: 'center'
    },
    body: {
        flex: 10,
        backgroundColor: '#005e00',
    },
    appContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    menuButtonHighlighted: {
        backgroundColor: '#547887'
    },
    menuButton: {
        padding: 10
    },
    robots: {
        flex: 1,
        flexDirection: 'row'
    },
    robotsList: {
        alignContent: 'center',
        width: '35%',
        flexWrap: 'wrap',
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: '#005e00'
    },
    robotHighlighted: {
        backgroundColor: '#008B00'
    },
    robot: {
        paddingTop: 10,
        backgroundColor: '#005e00',
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row'
    },
    robotUnit: {
        height: 200,
        flex: 1,
        flexDirection: 'row',
    },
    commandsList: {
        width: '65%',
        flexDirection: 'column'
    },
    robotControl: {
        flex: 1,
        flexWrap: 'wrap'
    },
    doubleaction: {},
    commandButton: {
        flexGrow: 1,
        width: '30%',
        height: 150
    },
    singleaction: {
        flex: 1,
        backgroundColor: '#ff0000'
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
    },
    onoffindicator: {
        flex: 1,
        backgroundColor: '#00ff00'
    },
    liveinfo: {},
    inputaction: {},
    command: {
        flex: 2,
        paddingTop: 30,
        flexDirection: 'row'
    },
    control: {
        flex: 1,
        flexWrap: 'wrap',
        // alignItems: 'flex-start',
        flexDirection: 'row',
        paddingRight: 15
    },
    home: {
        backgroundColor: '#fffeee'
    },
    connections: {
        backgroundColor: '#fffeee'
    },
    controller: {
        backgroundColor: '#fffeee'
    },
    logs: {
        backgroundColor: '#fffeee'
    }
});

export default LandscapeStyle;