import React from "react";
import store from "../../redux/store/index"


export default class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(store.getState())
    this.state = store.getState()  // 把redux仓库store值赋值到this.state
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    store.subscribe(this.storeChange)   // redux订阅模式组件改变 (Redux的状态)
  }
  changeInputValue(e) {
    console.log(e.target.value)  
    const action = {      // 通过redux的action改变store中值
      type: 'CHANGE_INPUT',
      value: e.target.value
    }
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState)
  }
  clickBtn() {
    const action = {
      type: 'ADD_ITEM',
    }
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = {
      type: 'DELETE_ITEM',
      value: index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        这是首页
        <input placeholder={this.state.inputValue} value={this.state.inputValue} onChange={this.changeInputValue}></input>
        <button onClick={this.clickBtn}>增加</button>
        <div style={{margin: '10px',border: '1px solid red'}}>
          <ul>
            {
              this.state.list.map((v,index) => {
                return <li key={index} onClick={this.deleteItem.bind(this, index)}>{v}</li>
              })
            }
            
          </ul>
        </div>
      </div>
    )
  }
}

