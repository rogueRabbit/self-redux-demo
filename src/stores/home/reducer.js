import * as home from './action-type';

let defaultScenic = {
    proName: '',
    proImage: '',
    address: '',
    grade: '',
    score: '',
    saleCount: '',
    tag: '',
    price: ''
}

export const scenicFormData = (state = defaultScenic, action = {} ) => {
    switch(action.type) {
        case home.SAVESCENIC:
            return {...state, ...action.value};
        default:
            return state;    
    }
}