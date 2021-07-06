import axios from 'axios'
import {CHANGE_INPUT , ADD_ITEM, DELETE_ITEM, GET_LIST}  from './actionTypes'

export const changeInputAction = (value)=>({  // es6写法直接返回对象不用使用return
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (value)=>({
    type:DELETE_ITEM,
    value
})

export const getListAction = (data) => ({
    type:GET_LIST,
    data
})

export const getList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
      const data = res.data
      const action = getListAction(data)
      dispatch(action)
    })
  }
}