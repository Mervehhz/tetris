import actionTypes from '../actionTypes'
import ShapeTReducer from './shapeTReducers'

const ShapeReducer = (state=60, action)=>{

    const widthBoard = 150;
    const widthSquare = 10;

    switch(action.type){
        case actionTypes.shape.LEFT:
            return (state>= 2 && state-action.payload);
        case actionTypes.shape.RIGHT:
            if(action.val === "O")
                return (state<= widthBoard-widthSquare*2-2 && state+action.payload); // 2
            else if(action.val === "I")
                return (state<= widthBoard-widthSquare*4-2 && state+action.payload); // 4
            else
                return (state<= widthBoard-widthSquare*3-2 && state+action.payload); // 3
        default:
            return state;
    }
}

export default ShapeReducer;