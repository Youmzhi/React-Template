// 仓库管理文件 （store只能是唯一的）
import { createStore } from 'redux'
import reducers from '../reducers/index'

const store = createStore(reducers)   // 生成store
export default store     // 暴露store
