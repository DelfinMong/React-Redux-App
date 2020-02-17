import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_HOLIDAY = 'FETCH_HOLIDAY';
export const FETCH_ERROR = 'FETCH_ERROR';

export const holidayAct = () => dispatch => {
    dispatch ({ type: FETCH_START });
    axios
     .get('https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v2/publicholidays/2017/US')
     .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_HOLIDAY, payload: res.data })
     })
     .catch( err => dispatch({type: FETCH_ERROR, payload: err }))
};


