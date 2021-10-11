import React, {Component} from 'react';
import {
    BrowserRouter,
    Link,
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
} from "react-router-dom";

function Home() {
    let {state} = useLocation();
    console.log(state)
    return (
        <div>
            <p>Home</p>
            <p>{state && state.foo ? state.foo : null}</p>
        </div>
    );
}

function Userinfo() {
    return (
        <div>userinfo</div>
    );
}

function Order() {
    return (
        <div>order</div>
    );
}

function My() {
    return (
        <div>
            <p>My</p>
            <ul>
                <li><Link to="/my/userinfo">个人信息</Link></li>
                <li><Link to="/my/order">订单</Link></li>
            </ul>
            <Switch>
                <Route path="/my/userinfo"><Userinfo/></Route>
                <Route path="/my/order"><Order/></Route>
                <Redirect to="/my/userinfo" />
            </Switch>
        </div>
    );
}

function Classes() {
    return (
        <div>
            <ul>
                <li><Link to="/detail/react">react</Link></li>
                <li><Link to="/detail/vue">vue</Link></li>
            </ul>
        </div>
    );
}

function Detail() {
    let {course} = useParams();
    let {push} = useHistory();
    let {pathname} = useLocation();
    console.log(useHistory(), useLocation(), useRouteMatch(), useParams())
    return (
        <div>
            <p>detail:{course}</p>
            <p>pathname:{pathname}</p>
            <button onClick={() => push("/", {foo: "bar"})}>返回</button>
        </div>
    )
}

function NotFound() {
    return (
        <div>404</div>
    )
}

class RouterSample extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/classes">课程</Link></li>
                        <li><Link to="/my">我的</Link></li>
                        <li><Link to="/aaa">404页面</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route path="/classes"><Classes/></Route>
                        <Route path="/detail/:course"><Detail/></Route>
                        <Route path="/my"><My/></Route>
                        <Route><NotFound/></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default RouterSample;