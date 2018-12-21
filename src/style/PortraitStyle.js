import {StyleSheet} from 'react-native';

let PortraitStyle = StyleSheet.create({
menuBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3E606F',
    alignItems: 'center'
},
body: {
    flex: 10,
    backgroundColor: '#fffeee',
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
    paddingLeft: 15,
    alignContent: 'center',
    maxWidth: 200,
    flexDirection: 'column',
    backgroundColor: '#005e00'
},
robotHighlighted: {
    backgroundColor: '#008B00'
},
robot: {
    backgroundColor: '#005e00',
    flex: 1,
    flexDirection: 'row'
},
robotUnit: {
    height: 200,
    flex: 1,
    flexDirection: 'row',
},
robotControl: {},
doubleaction: {},
commandButton: {
    height: 150
},
singleaction: {
    flex: 1,
    backgroundColor: '#ff0000'
},
onoffindicator: {
    flex: 1,
    backgroundColor: '#00ff00'
},
liveinfo: {},
inputaction: {},
command: {
    flexDirection: 'row',
    height: 200
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

export default PortraitStyle;