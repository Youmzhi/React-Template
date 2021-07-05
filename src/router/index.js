import { Switch, Route } from 'react-router-dom';
// import loadable from 'react-loadable'  // 懒加载函数

// 引入pages组件
import Index from '../pages/Index/index';
import About from '../pages/About/index';
import DownloadApp from '../pages/DownloadApp/index';

// 定义路由
const routes = (
  <div>
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/index">
        <Index />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/downloadapp">
        <DownloadApp />
      </Route>
    </Switch>
  </div>
)

export { routes };
