import './App.css';
import Board from './components/board';
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Actions from './redux/actions'

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random()*7) + 1);
  document.onkeydown = checkKey;
  const dispatch=useDispatch();
  const shapeT=useSelector(state=>state.ShapeTReducer);

  function checkKey(e) {
      e = e || window.event;
      if (e.key === 'ArrowUp') {
        setNumber(Math.floor(Math.random()*7) + 1)
      }
      else if (e.key === 'ArrowDown') {
        dispatch(Actions.ShapeActions.toDown(5, shapeT));
      }
      else if (e.key === 'ArrowLeft') {
          dispatch(Actions.ShapeActions.toLeft(5, shapeT));
      }
      else if (e.key === 'ArrowRight') {
          dispatch(Actions.ShapeActions.toRight(5, shapeT));
      }
  }

  return (
    <div className="App">
        <Board num={number}/>
    </div>
  );
}

export default App;
