import React from "react";
import store from "../../redux/store/index"
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from '../../redux/actions/actionTypes'
import { changeInputAction  , addItemAction  , deleteItemAction } from '../../redux/actions/actionCreators'
import IndexUi from './IndexUi'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()  // 把redux仓库store值赋值到this.state
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)   // redux订阅模式组件改变 (Redux的状态)
  }
  changeInputValue(e) {  
    console.log(e.target.value)
    // const action = {      // 通过redux的action改变store中值
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action =  changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  clickBtn() {
    // const action = {
    //   type: ADD_ITEM,
    // }
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem(index) {
    // const action = {
    //   type: DELETE_ITEM,
    //   value: index
    // }
    console.log(index)
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <IndexUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}>  
      </IndexUi>
    )
  }
}

