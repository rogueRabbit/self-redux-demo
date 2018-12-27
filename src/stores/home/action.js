import * as home from './action-type';

// 保存景点
export const saveScenic = (value) => {
    return {
        type: home.SAVESCENIC,
        value,
    }
}