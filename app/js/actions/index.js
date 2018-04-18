import {IN,UN} from '../constants/index';
export const oIN = (otype)=>{
    // console.log(otype)
    return {
        type:IN,
        otype
    }
}
export const oUN = (otype)=>{
    return {
        type:UN,
        otype
    }
}