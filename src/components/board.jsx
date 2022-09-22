import React, {useEffect} from 'react'
import './board.css'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import Actions from '../redux/actions'
import { useTime } from 'react-timer-hook';

function Board(props){

    const shapeLeft=useSelector(state=>state.ShapeReducer);
    const dispatch=useDispatch();
    const shapeTop=useSelector(state=>state.TopReducer);
    const shapeT=useSelector(state=>state.ShapeTReducer);

    // useEffect(() =>{
    //     document.addEventListener('keydown', detectKeyDown, true);
    // }, [shape])

    // const detectKeyDown = (e)=>{
    //     {e.key === 'ArrowLeft' && dispatch(Actions.ShapeActions.toLeft()) &&
    //         console.log(shape)
    //     const Shape = styled.div`
    //         background-color:red;
    //     `;
    //     }
    // }

    function MyTime() {
        const {
            seconds,
            minutes,
            hours,
            ampm,
        } = useTime({ format: '12-hour'});

        useEffect(()=>{
            setTimeout(()=>{
                dispatch(Actions.ShapeActions.toDown(5, shapeT))
            },300)
        },[seconds])    
    }
    
    MyTime();

    return (        
        <div className='board'>
            {props.num === 1 && dispatch(Actions.ShapeTTypes.toO()) && (<div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft+10}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft}}></div>
            <div className='shape' style={{top: shapeTop + 10, left: shapeLeft+10}}></div></div>)}

            {props.num === 2 && dispatch(Actions.ShapeTTypes.toJ()) && (<div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft+10}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft+20}}></div>
            <div className='shape' style={{top: shapeTop, left: shapeLeft+20}}></div></div>)}


            {props.num === 3 && dispatch(Actions.ShapeTTypes.toZ()) && (<div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft+10}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft+10}}></div>
            <div className='shape' style={{top: shapeTop + 10, left: shapeLeft+20}}></div></div>)}

            {props.num === 4 && dispatch(Actions.ShapeTTypes.toS()) && (<div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft+10}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft+10}}></div>
            <div className='shape' style={{top: shapeTop, left: shapeLeft+20}}></div></div>)}

            {props.num === 5 && dispatch(Actions.ShapeTTypes.toL()) && (<div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft+10}}></div>
            <div className='shape' style={{top: shapeTop + 10, left: shapeLeft+20}}></div></div>)}

            {props.num === 6 && dispatch(Actions.ShapeTTypes.toT()) && (<div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop + 10, left: shapeLeft+10}}></div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft+10}}></div>
            <div className='shape' style={{top: shapeTop + 10, left: shapeLeft+20}}></div></div>)}


            {props.num === 7 && dispatch(Actions.ShapeTTypes.toI()) && (<div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft}}></div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft+10}}></div>
            <div className="shape" style={{top: shapeTop, left: shapeLeft+20}}></div>
            <div className='shape' style={{top: shapeTop, left: shapeLeft+30}}></div></div>)}
        </div>           
    )
}

export default Board