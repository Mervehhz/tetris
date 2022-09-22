import actionTypes from '../actionTypes'

const ShapeTReducer = (state="", action)=>{
    
    switch(action.type){
        case actionTypes.shapeT.O_TYPE:
            return state = "O";
        case actionTypes.shapeT.J_TYPE:
            return state = "J";
        case actionTypes.shapeT.Z_TYPE:
            return state = "Z";
        case actionTypes.shapeT.S_TYPE:
            return state = "S";
        case actionTypes.shapeT.L_TYPE:
            return state = "L";
        case actionTypes.shapeT.T_TYPE:
            return state = "T";
        case actionTypes.shapeT.I_TYPE:
            return state = "I";
        default:
            return state;
    }
}

export default ShapeTReducer;