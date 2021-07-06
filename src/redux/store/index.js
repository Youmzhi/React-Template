// 仓库管理文件 （store只能是唯一的）
import { createStore, applyMiddleware  } from 'redux'
import reducers from '../reducers/index'
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)   // 生成store
export default store     // 暴露store

// （redux使用场景）
// 某个组件的状态，需要共享
// 某个状态需要在任何地方都可以拿到
// 一个组件需要改变全局状态
// 一个组件需要改变另一个组件的状态

// (redux-thunk中间件 异步处理 日志记录 错误报告)

// (redux-redux中间件)
// <Provider></Provider>
// connect
