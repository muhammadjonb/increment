import {DEC, INC, RESET} from './type'

export const inc = (payload) =>{
    return{
        type : INC,
        payload
    }
}

export const dic = () =>{
    return{
        type : DEC,
    }
}

export const reset = () =>{
    return{
        type : RESET,
        
    }
}