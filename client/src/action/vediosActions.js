import { FETCH_VEDIOS, VEDIOS_LOADING, VEDIOS_LOADED, GET_VEDIO } from './types';
import axios from 'axios';

export const fetchVedios = () => dispatch => {
    dispatch({ type:VEDIOS_LOADING })
    axios.get('/api/fetchVedios')
    // .then(res => res.json()) 
      .then(vedios => {
        // console.log(vedios.data)
            dispatch({ type:VEDIOS_LOADED })
            dispatch({
                type:FETCH_VEDIOS,
                payload:vedios.data
            })
      })
      
};


export const findVedio = (id) => (dispatch) => {

  axios.post('/api/findVedio',id)
    .then(vedio =>{
      console.log(vedio.data)
            dispatch({
              type: GET_VEDIO,
              payload: vedio.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};
