import * as types from './actionTypes';
import axios from 'axios';

export function loadDataSuccess(data){
    return {
        type: types.LOAD_DATA_SUCCESS,
        data
    };
}

export function loadData() {
     return function(dispatch){
         return axios('https://react-slingshot-lockround.c9users.io:8081/Monsoon/').then(resp => {
             dispatch(loadDataSuccess(resp.data[0]));
         }).catch(error => {
            throw(error) ;
         });
     }
}