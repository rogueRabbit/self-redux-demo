import * as scenic from './action-type';

let defaultData = [];

export const formData = (state = defaultData, action = {}) => {
    switch(action.type) {
        case scenic.SAVESCENIC:
            return [action.value, ...state];
        default:
            return state;
    }
}