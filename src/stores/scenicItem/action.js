import * as scenic from './action-type';

export const saveScenic = (value, dataType) => {
    return {
        type: scenic.SAVESCENIC,
        value
    }
}