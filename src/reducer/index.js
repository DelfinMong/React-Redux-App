import { FETCH_START, FETCH_HOLIDAY, FETCH_ERROR } from "../action"

const initialState = {
   day: [],
   isFetch: false,
   error : ''
   }

   const reducer = (state =initialState, action) => {
      console.log('reducer', action)
      switch(action.type){
          case FETCH_START:
             return{
                 ...state,
                 isFetch: true,
                 day: []
                 }
          case FETCH_HOLIDAY:
              return{
                  ...state,
                  day: action.payload,
                  isFetch: false
              } 
          case FETCH_ERROR:
              return{
                  ...state,
                  error: action.payload,
                  isFetch: false
              }
          default:
                return state;   
      }
   };

export default reducer