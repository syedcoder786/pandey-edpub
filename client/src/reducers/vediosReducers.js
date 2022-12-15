import { FETCH_VEDIOS, GET_VEDIO, ERROR_VEDIO, VEDIOS_LOADING, VEDIOS_LOADED } from '../action/types';

const initialState={
    items:[],
    // item:localStorage.getItem('item'),
    item:{},
    // price:localStorage.getItem('price'),
    itemerr:{},
    vediosLoading: false
}
export default function(state=initialState,action){
    switch(action.type){
        case VEDIOS_LOADING:
        return{
            ...state,
            vediosLoading:true
            }
        case VEDIOS_LOADED:
        return{
            ...state,
            vediosLoading:false
            }
        case FETCH_VEDIOS:
        // localStorage.removeItem('price')
        return {
            ...state,
            items:action.payload
        };
        case GET_VEDIO:
        // localStorage.setItem('price', action.payload.selling_rate)
        // localStorage.setItem('item', JSON.stringify(action.payload))
        return {
            ...state,
            item:action.payload
        };
        
        case ERROR_VEDIO:
        return {
            ...state,
            itemerr:action.payload
        };
        default:
        return state;
    };
}