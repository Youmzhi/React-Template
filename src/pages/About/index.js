import React from "react";
import {connect} from 'react-redux'
function About(props) {
  return (
    <div>这是about 
      <input placeholder={props.inputValue} value={props.inputValue} onChange={props.inputChange}></input>
    </div>
  )
}

const mapStateToProps = (state)=> {   // 映射关系 porps
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) =>{   // 映射关系 action
  return {
    inputChange (e) {
      let action = {
        type: 'CHANGE_INPUT',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

// connect方法接受两个参数：
// mapStateToProps和mapDispatchToProps。
// 它们定义了 UI 组件的业务逻辑。
// 前者负责输入逻辑，即将state映射到 UI 组件的参数（props）。
// 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
// connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再链接到一起，让代码更加清晰和易于维护。这也是React-Redux最大的特点
export default connect(mapStateToProps, mapDispatchToProps)(About)  // 连接器

