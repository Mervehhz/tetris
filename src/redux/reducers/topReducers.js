import actionTypes from '../actionTypes'

const TopReducer = (state=0, action)=>{

    const heightBoard = 200;
    const heightSquare = 10;

    switch(action.type){
        case actionTypes.shape.DOWN:
            if(action.val === "I")
                return (state<=heightBoard-heightSquare-4 && state+action.payload);
            else 
                return (state<=heightBoard-2*heightSquare-2 && state+action.payload);
        default:
            return state;
    }
}

export default TopReducer;