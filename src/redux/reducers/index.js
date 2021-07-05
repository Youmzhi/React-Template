// 业务管理能力 reducers
const defaultState = {
  inputValue: 'text store',
  list: [
    '早上八点开晨会，分配今天的任务',
    '早九点和项目经理开需求沟通会',
    '玩五点组织人员进行Review代码'
  ]
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
  if (action.type === 'ADD_ITEM') {  // 新增
    // 进行仓库数据改变
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === 'DELETE_ITEM') {  // 移除
    // 进行仓库数据改变
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  return state
}