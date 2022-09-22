import actionTypes from '../actionTypes'

const toO=()=>{
    return {type:actionTypes.shapeT.O_TYPE}
}

const toJ=()=>{
    return {type:actionTypes.shapeT.J_TYPE}
}

const toZ=()=>{
    return {type:actionTypes.shapeT.Z_TYPE}
}

const toS=()=>{
    return {type:actionTypes.shapeT.S_TYPE}
}

const toL=()=>{
    return {type:actionTypes.shapeT.L_TYPE}
}

const toT=()=>{
    return {type:actionTypes.shapeT.T_TYPE}
}

const toI=()=>{
    return {type:actionTypes.shapeT.I_TYPE}
}

const ShapeTTypes={toO, toJ, toZ, toS, toL, toT, toI};

export default ShapeTTypes;