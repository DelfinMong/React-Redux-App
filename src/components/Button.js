import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { holidayAct } from '../action';


const Button = () => {
  const data = useSelector(state => state.isFetch)
  const dispatch = useDispatch()

  return(
  <>
      {/* {data ? ( <div> **The INFO is Coming** </div>) : (
        <button  onClick={() => dispatch(holidayAct())}>Load holiday</button>
      )
      } */}
</>
  )
}
export default Button