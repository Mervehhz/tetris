import actionTypes from '../actionTypes'

const toLeft=(pay, value)=>{
    return {type:actionTypes.shape.LEFT, payload:pay, val:value}
}

const toRight=(pay, value)=>{
    return {type:actionTypes.shape.RIGHT, payload:pay, val:value}
}

const toDown=(pay, value)=>{
    return {type:actionTypes.shape.DOWN, payload:pay, val:value}
}

const ShapeActions={toLeft, toRight, toDown};

export default ShapeActions;