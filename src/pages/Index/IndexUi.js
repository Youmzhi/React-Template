import React from "react";

function IndexUi(props) {  // 无状态组件
  //  如果你用到了constructor就必须写super()，是用来初始化this的，可以绑定事件到this上
  // 如果你在constructor中要使用this.props，就必须给super加参数，super(props)
  // （注意：无论有没有constructor，在render中this.props都是可以使用的，这是react自动附带的）
  // 如果没用到constructor，是可以不写的，react会默认添加一个空的constructor
  
  return (
    <div>
      这是首页
      <input placeholder={props.inputValue} value={props.inputValue} onChange={props.changeInputValue}></input>
      <button onClick={props.clickBtn}>增加</button>
      <div style={{margin: '10px',border: '1px solid red'}}>
        <ul>
          {
            props.list.map((v,index) => {
              return <li style={{border: '1px solid blue'}} key={index} onClick={()=>{props.deleteItem(index)} }>{v}</li>
            })
          }
          
        </ul>
      </div>
    </div>
  )
}

export default IndexUi