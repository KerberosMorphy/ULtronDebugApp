import {combineReducers} from 'redux';

import {robotList} from 'ULtronDebugApp/src/res/json/robots.json';

const INITIAL_STATE = {
    selectedMenu: 'Home',
    selectedRobot: null,
    commandList: null,
    robotList: robotList
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_MENU':
            const {
                selectedMenu,
                selectedRobot,
                commandList,
                robotList
            } = state;

            const changedMenu = action.payload;

            const newState = {
                selectedMenu: changedMenu,
                selectedRobot,
                commandList,
                robotList
            };
            return newState;
        default:
            return state
    }
};

export default combineReducers({
    robotRedux: appReducer,
});
