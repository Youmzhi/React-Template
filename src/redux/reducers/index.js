// 业务管理能力 reducers
const defaultState = {
  inputValue: 'text store'
}
export default (state = defaultState, action)=> {  // 暴露出去一个方法
  console.log(state, action)
  // reducer里只能接受state不能改变state(重点)
  if (action.type === 'CHANGE_INPUT') {
    // 进行仓库数据改变
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}