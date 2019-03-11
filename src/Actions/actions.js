import axios from "axios";

export const createDice = () => {
  return dispatch => {
    return axios
      .post(`http://localhost:3000/dice`)
      .then(json => {
        dispatch({type:"ADD_DICE",payload:json.data})
      })
      .catch(error => {
        console.log(error)
      });
  };
};

export const getDice = () => {
  return dispatch => {
    return axios
      .get(`http://localhost:3000/dice`)
      .then(json => {
        dispatch({type:"INITIAL_DICE",payload:json.data})
      })
      .catch(error => {
        console.log(error)
      });
  };
};

export const deleteDice = (id) => {
  return dispatch => {
    return axios
      .delete(`http://localhost:3000/dice/${id}`)
      .then(json => {
        dispatch({type:"DELETE_DICE",payload:id})
      })
      .catch(error => {
        console.log(error)
      });
  };
};
