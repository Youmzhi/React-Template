// 仓库管理文件
import { createStore } from 'redux'
import reducers from '../reducers/index'

const store = createStore(reducers)   // 生成store
export default store     // 暴露store
